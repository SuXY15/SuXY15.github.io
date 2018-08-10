<#---
#requires -RunAsAdministrator

(https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4624)
Id 4624(S): An account was successfully logged on. 
<EventData>
 <Data Name="SubjectUserSid">S-1-5-18</Data> 
 <Data Name="SubjectUserName">WIN-GG82ULGC9GO$</Data> 
 <Data Name="SubjectDomainName">WORKGROUP</Data> 
 <Data Name="SubjectLogonId">0x3e7</Data> 
 <Data Name="TargetUserSid">S-1-5-21-1377283216-344919071-3415362939-500</Data> 
 <Data Name="TargetUserName">Administrator</Data> 
 <Data Name="TargetDomainName">WIN-GG82ULGC9GO</Data> 
 <Data Name="TargetLogonId">0x8dcdc</Data> 
 <Data Name="LogonType">2</Data> 

(https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4634)
Id 4634(S): An account was logged off.
<EventData>
 <Data Name="TargetUserSid">S-1-5-90-1</Data> 
 <Data Name="TargetUserName">DWM-1</Data> 
 <Data Name="TargetDomainName">Window Manager</Data> 
 <Data Name="TargetLogonId">0x1a0992</Data> 
 <Data Name="LogonType">2</Data> 

(https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4648)
Id 4648(S): A logon was attempted using explicit credentials.
<EventData>
 <Data Name="SubjectUserSid">S-1-5-21-3457937927-2839227994-823803824-1104</Data> 
 <Data Name="SubjectUserName">dadmin</Data> 
 <Data Name="SubjectDomainName">CONTOSO</Data> 
 <Data Name="SubjectLogonId">0x31844</Data> 
 <Data Name="LogonGuid">{00000000-0000-0000-0000-000000000000}</Data> 
 <Data Name="TargetUserName">ladmin</Data> 
 <Data Name="TargetDomainName">CONTOSO</Data> 

(https://docs.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4672)
Id 4672(S): Special privileges assigned to new logon.
<EventData>
 <Data Name="SubjectUserSid">S-1-5-21-3457937927-2839227994-823803824-1104</Data> 
 <Data Name="SubjectUserName">dadmin</Data> 
 <Data Name="SubjectDomainName">CONTOSO</Data> 
 <Data Name="SubjectLogonId">0x671101</Data> 

 LogonType:
    2   Interactive A user logged on to this computer.
    3   Network A user or computer logged on to this computer from the network.
    4   Batch   Batch logon type is used by batch servers, where processes may be executing on behalf of a user without their direct intervention.
    5   Service A service was started by the Service Control Manager.
    7   Unlock  This workstation was unlocked.
    8   NetworkCleartext    A user logged on to this computer from the network. The user's password was passed to the authentication package in its unhashed form. The built-in authentication packages all hash credentials before sending them across the network. The credentials do not traverse the network in plaintext (also called cleartext).
    9   NewCredentials  A caller cloned its current token and specified new credentials for outbound connections. The new logon session has the same local identity, but uses different credentials for other network connections.
    10  RemoteInteractive   A user logged on to this computer remotely using Terminal Services or Remote Desktop.
    11  CachedInteractive   A user logged on to this computer with network credentials that were stored locally on the computer. The domain controller was not contacted to verify the credentials.
---#>

#region force to run under authorization
$currentWi = [Security.Principal.WindowsIdentity]::GetCurrent()
$currentWp = [Security.Principal.WindowsPrincipal]$currentWi
 
if( -not $currentWp.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator))
{
    $currentFile = ($pwd).Path + '\LogInfo.ps1'
    Start-Process "$psHome\powershell.exe" -ArgumentList "$currentFile"   -verb runas
    return
}
#endregion

echo "Preparing..."
$template = @{'Type'=''; 'Id'=''; 'Description'=''; 'Time'=''; 'User'=''; }
$template = New-Object -TypeName PSObject -Property $template

echo "Getting Event Log..."
$Li_Event = Get-WinEvent -FilterHashtable @{logname='security'; id=@(4624,4634,4648,4672)}
$csvList = 1..$Li_Event.Count
$csvFlag = 0
$csvCounter = 0

echo "Analyzing Event Log..."
Foreach ($i in $Li_Event)
{
    $ei = [Xml]$i.toXml()
    $di = $ei.Event.EventData.Data 
    if(($i.Id -eq 4624) -and ($di[8].'#text' -eq 2)){
        if(($di[5].'#text' -notlike "*SYSTEM*") -and ($di[5].'#text' -notlike "*-?")){
            $csvItem = $template | Select-Object Type, Id, Description, Time, User
            $csvItem.Type        = "Log on"
            $csvItem.Description = "An account was successfully logged on."
            $csvItem.Id          = $($i.Id)
            $csvItem.Time        = $($i.TimeCreated)
            $csvItem.User        = $($di[5].'#text')
            $csvFlag = 1
        }
    }if(($i.Id -eq 4634) -and ($di[4].'#text' -eq 2)){
        if(($di[1].'#text' -notlike "*SYSTEM*") -and ($di[1].'#text' -notlike "*-?")){
            $csvItem = $template | Select-Object Type, Id, Description, Time, User
            $csvItem.Type        = "Log off"
            $csvItem.Description = "An account was logged off."
            $csvItem.Id          = $($i.Id)
            $csvItem.Time        = $($i.TimeCreated)
            $csvItem.User        = $($di[1].'#text')
            $csvFlag = 1
        }
    }if($i.Id -eq 4648){
        if(($di[5].'#text' -notlike "*SYSTEM*") -and ($di[5].'#text' -notlike "*-?")){
            $csvItem = $template | Select-Object Type, Id, Description, Time, User
            $csvItem.Type        = "Log on"
            $csvItem.Description = "A logon was attempted using explicit credentials."
            $csvItem.Id          = $($i.Id)
            $csvItem.Time        = $($i.TimeCreated)
            $csvItem.User        = $($di[5].'#text')
            $csvFlag = 1
        }
    }if($i.Id -eq 4672){
        if(($di[1].'#text' -notlike "*SYSTEM*") -and ($di[1].'#text' -notlike "*-?")){
            $csvItem = $template | Select-Object Type, Id, Description, Time, User
            $csvItem.Type        = "Log off"
            $csvItem.Description = "Special privileges assigned to new logon."
            $csvItem.Id          = $($i.Id)
            $csvItem.Time        = $($i.TimeCreated)
            $csvItem.User        = $($di[1].'#text')
            $csvFlag = 1
        }
    }
    if($csvFlag){
        $csvFlag = 0
        $csvList[$csvCounter] = $csvItem
        $csvCounter = $csvCounter + 1
    }
}

echo "Writing CSV File..."
$csvList | Export-Csv .\LogInfo.csv

$csvList[1..($csvCounter-1)] | Format-Table Type, Id, Time, User

Start-Sleep -s 10