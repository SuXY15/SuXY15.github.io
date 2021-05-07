data_textfn = function(){/*
year,platform,id,globalsale
1980,2600,2600-1980,11.38
1981,2600,2600-1981,47.15
1982,2600,2600-1982,76.01
1983,2600,2600-1983,81.84
1983,NES,NES-1983,10.96
1984,NES,NES-1984,61.05
1984,2600,2600-1984,82.11
1985,NES,NES-1985,114.49
1985,2600,2600-1985,82.56
1985,PC,PC-1985,0.03
1985,DS,DS-1985,0.02
1986,NES,NES-1986,150.9
1986,2600,2600-1986,83.22
1986,PC,PC-1986,0.03
1986,DS,DS-1986,0.02
1987,NES,NES-1987,170.66
1987,2600,2600-1987,85.2
1987,PC,PC-1987,0.03
1987,DS,DS-1987,0.02
1988,NES,NES-1988,215.67
1988,2600,2600-1988,85.95
1988,GB,GB-1988,1.43
1988,PC,PC-1988,0.06
1988,DS,DS-1988,0.02
1989,NES,NES-1989,223.52
1989,GB,GB-1989,66.41
1989,2600,2600-1989,86.57
1989,PC,PC-1989,0.06
1989,DS,DS-1989,0.02
1990,NES,NES-1990,239.26
1990,GB,GB-1990,71.3
1990,SNES,SNES-1990,26.16
1990,2600,2600-1990,86.57
1990,GEN,GEN-1990,2.6
1990,PC,PC-1990,0.06
1990,DS,DS-1990,0.02
1991,NES,NES-1991,245.37
1991,GB,GB-1991,76.87
1991,SNES,SNES-1991,42.37
1991,2600,2600-1991,86.57
1991,GEN,GEN-1991,6.94
1991,PC,PC-1991,0.06
1991,DS,DS-1991,0.02
1992,NES,NES-1992,247.35
1992,GB,GB-1992,102.35
1992,SNES,SNES-1992,75.35
1992,2600,2600-1992,86.57
1992,GEN,GEN-1992,19.6
1992,PC,PC-1992,3.08
1992,GG,GG-1992,0.04
1992,DS,DS-1992,0.02
1993,NES,NES-1993,250.96
1993,GB,GB-1993,102.35
1993,SNES,SNES-1993,115.36
1993,2600,2600-1993,86.57
1993,GEN,GEN-1993,20.25
1993,PC,PC-1993,3.08
1993,SCD,SCD-1993,1.5
1993,NG,NG-1993,0.21
1993,GG,GG-1993,0.04
1993,DS,DS-1993,0.02
1994,NES,NES-1994,251.07
1994,GB,GB-1994,114.52
1994,SNES,SNES-1994,150.44
1994,2600,2600-1994,86.57
1994,GEN,GEN-1994,28.36
1994,PC,PC-1994,15.93
1994,SCD,SCD-1994,1.87
1994,PS,PS-1994,6.02
1994,SAT,SAT-1994,3.64
1994,NG,NG-1994,1.01
1994,GG,GG-1994,0.04
1994,3DO,3DO-1994,0.02
1994,DS,DS-1994,0.02
1995,NES,NES-1995,251.07
1995,GB,GB-1995,118.12
1995,SNES,SNES-1995,182.65
1995,2600,2600-1995,86.57
1995,GEN,GEN-1995,28.36
1995,PC,PC-1995,20.16
1995,PS,PS-1995,41.94
1995,SAT,SAT-1995,15.22
1995,SCD,SCD-1995,1.87
1995,NG,NG-1995,1.34
1995,TG16,TG16-1995,0.16
1995,3DO,3DO-1995,0.1
1995,GG,GG-1995,0.04
1995,DS,DS-1995,0.02
1996,NES,NES-1996,251.07
1996,GB,GB-1996,154.14
1996,SNES,SNES-1996,198.58
1996,N64,N64-1996,34.11
1996,2600,2600-1996,86.57
1996,PS,PS-1996,136.62
1996,GEN,GEN-1996,28.36
1996,PC,PC-1996,30.75
1996,SAT,SAT-1996,22.91
1996,SCD,SCD-1996,1.87
1996,NG,NG-1996,1.44
1996,TG16,TG16-1996,0.16
1996,3DO,3DO-1996,0.1
1996,GG,GG-1996,0.04
1996,PCFX,PCFX-1996,0.03
1996,DS,DS-1996,0.02
1997,NES,NES-1997,251.07
1997,GB,GB-1997,160.51
1997,SNES,SNES-1997,199.57
1997,N64,N64-1997,73.62
1997,PS,PS-1997,272.7
1997,2600,2600-1997,86.57
1997,GEN,GEN-1997,28.36
1997,PC,PC-1997,42.01
1997,SAT,SAT-1997,29.68
1997,SCD,SCD-1997,1.87
1997,NG,NG-1997,1.44
1997,TG16,TG16-1997,0.16
1997,3DO,3DO-1997,0.1
1997,GG,GG-1997,0.04
1997,PCFX,PCFX-1997,0.03
1997,DS,DS-1997,0.02
1998,NES,NES-1998,251.07
1998,GB,GB-1998,187.41
1998,SNES,SNES-1998,199.79
1998,N64,N64-1998,122.9
1998,PS,PS-1998,442.28
1998,2600,2600-1998,86.57
1998,GEN,GEN-1998,28.36
1998,PC,PC-1998,45.29
1998,DC,DC-1998,3.39
1998,SAT,SAT-1998,33.5
1998,SCD,SCD-1998,1.87
1998,NG,NG-1998,1.44
1998,TG16,TG16-1998,0.16
1998,3DO,3DO-1998,0.1
1998,GG,GG-1998,0.04
1998,PCFX,PCFX-1998,0.03
1998,DS,DS-1998,0.02
1999,NES,NES-1999,251.07
1999,GB,GB-1999,225.42
1999,SNES,SNES-1999,200.05
1999,N64,N64-1999,180.86
1999,PS,PS-1999,586.85
1999,2600,2600-1999,86.57
1999,GEN,GEN-1999,28.36
1999,PC,PC-1999,50.04
1999,DC,DC-1999,8.56
1999,SAT,SAT-1999,33.59
1999,SCD,SCD-1999,1.87
1999,WS,WS-1999,0.46
1999,NG,NG-1999,1.44
1999,TG16,TG16-1999,0.16
1999,3DO,3DO-1999,0.1
1999,GG,GG-1999,0.04
1999,PCFX,PCFX-1999,0.03
1999,DS,DS-1999,0.02
2000,NES,NES-2000,251.07
2000,GB,GB-2000,245.18
2000,SNES,SNES-2000,200.05
2000,N64,N64-2000,214.87
2000,PS,PS-2000,683.13
2000,2600,2600-2000,86.57
2000,GEN,GEN-2000,28.36
2000,PC,PC-2000,54.72
2000,PS2,PS2-2000,39.11
2000,DC,DC-2000,14.55
2000,SAT,SAT-2000,33.59
2000,SCD,SCD-2000,1.87
2000,XB,XB-2000,0.99
2000,WS,WS-2000,1.14
2000,NG,NG-2000,1.44
2000,TG16,TG16-2000,0.16
2000,GBA,GBA-2000,0.06
2000,3DO,3DO-2000,0.1
2000,GG,GG-2000,0.04
2000,PCFX,PCFX-2000,0.03
2000,DS,DS-2000,0.02
2001,NES,NES-2001,251.07
2001,GB,GB-2001,254.42
2001,SNES,SNES-2001,200.05
2001,PS2,PS2-2001,205.54
2001,N64,N64-2001,218.13
2001,PS,PS-2001,718.65
2001,2600,2600-2001,86.57
2001,GC,GC-2001,26.3
2001,XB,XB-2001,23.23
2001,GEN,GEN-2001,28.36
2001,GBA,GBA-2001,61.68
2001,PC,PC-2001,60.23
2001,DC,DC-2001,15.62
2001,SAT,SAT-2001,33.59
2001,SCD,SCD-2001,1.87
2001,WS,WS-2001,1.42
2001,NG,NG-2001,1.44
2001,TG16,TG16-2001,0.16
2001,3DO,3DO-2001,0.1
2001,GG,GG-2001,0.04
2001,PCFX,PCFX-2001,0.03
2001,DS,DS-2001,0.02
2002,NES,NES-2002,251.07
2002,GB,GB-2002,254.42
2002,SNES,SNES-2002,200.05
2002,PS2,PS2-2002,410.94
2002,GBA,GBA-2002,136.06
2002,N64,N64-2002,218.21
2002,PS,PS-2002,725.34
2002,2600,2600-2002,86.57
2002,GC,GC-2002,78.23
2002,XB,XB-2002,71.38
2002,GEN,GEN-2002,28.36
2002,PC,PC-2002,68.83
2002,DC,DC-2002,15.91
2002,SAT,SAT-2002,33.59
2002,SCD,SCD-2002,1.87
2002,WS,WS-2002,1.42
2002,NG,NG-2002,1.44
2002,TG16,TG16-2002,0.16
2002,3DO,3DO-2002,0.1
2002,GG,GG-2002,0.04
2002,PCFX,PCFX-2002,0.03
2002,DS,DS-2002,0.02
2003,NES,NES-2003,251.07
2003,GB,GB-2003,254.42
2003,SNES,SNES-2003,200.05
2003,PS2,PS2-2003,595.23
2003,GBA,GBA-2003,192.79
2003,N64,N64-2003,218.21
2003,PS,PS-2003,727.39
2003,2600,2600-2003,86.57
2003,GC,GC-2003,128.89
2003,XB,XB-2003,126.54
2003,GEN,GEN-2003,28.36
2003,PC,PC-2003,77.79
2003,DC,DC-2003,15.91
2003,SAT,SAT-2003,33.59
2003,SCD,SCD-2003,1.87
2003,WS,WS-2003,1.42
2003,NG,NG-2003,1.44
2003,TG16,TG16-2003,0.16
2003,3DO,3DO-2003,0.1
2003,GG,GG-2003,0.04
2003,PCFX,PCFX-2003,0.03
2003,DS,DS-2003,0.02
2004,NES,NES-2004,251.07
2004,GB,GB-2004,254.42
2004,PS2,PS2-2004,807.01
2004,SNES,SNES-2004,200.05
2004,GBA,GBA-2004,270.88
2004,N64,N64-2004,218.21
2004,PS,PS-2004,727.39
2004,DS,DS-2004,17.48
2004,XB,XB-2004,192.04
2004,2600,2600-2004,86.57
2004,GC,GC-2004,157.78
2004,PC,PC-2004,88.25
2004,GEN,GEN-2004,28.36
2004,DC,DC-2004,15.91
2004,PSP,PSP-2004,7.13
2004,SAT,SAT-2004,33.59
2004,SCD,SCD-2004,1.87
2004,WS,WS-2004,1.42
2004,NG,NG-2004,1.44
2004,TG16,TG16-2004,0.16
2004,3DO,3DO-2004,0.1
2004,GG,GG-2004,0.04
2004,PCFX,PCFX-2004,0.03
2005,NES,NES-2005,251.07
2005,GB,GB-2005,254.42
2005,DS,DS-2005,148.88
2005,PS2,PS2-2005,967.66
2005,SNES,SNES-2005,200.05
2005,GBA,GBA-2005,304.78
2005,N64,N64-2005,218.21
2005,PS,PS-2005,727.39
2005,XB,XB-2005,241.21
2005,2600,2600-2005,86.57
2005,PSP,PSP-2005,51.36
2005,GC,GC-2005,185.58
2005,PC,PC-2005,92.72
2005,GEN,GEN-2005,28.36
2005,DC,DC-2005,15.91
2005,X360,X360-2005,8.32
2005,SAT,SAT-2005,33.59
2005,SCD,SCD-2005,1.87
2005,WS,WS-2005,1.42
2005,NG,NG-2005,1.44
2005,TG16,TG16-2005,0.16
2005,3DO,3DO-2005,0.1
2005,GG,GG-2005,0.04
2005,PCFX,PCFX-2005,0.03
2006,Wii,Wii-2006,137.91
2006,NES,NES-2006,251.07
2006,GB,GB-2006,254.42
2006,DS,DS-2006,270.03
2006,PS2,PS2-2006,1071.08
2006,SNES,SNES-2006,200.05
2006,GBA,GBA-2006,310.13
2006,N64,N64-2006,218.21
2006,PS,PS-2006,727.39
2006,XB,XB-2006,251.36
2006,2600,2600-2006,86.57
2006,PSP,PSP-2006,107.21
2006,GC,GC-2006,196.87
2006,PC,PC-2006,95.69
2006,X360,X360-2006,60.2
2006,GEN,GEN-2006,28.36
2006,PS3,PS3-2006,21.07
2006,DC,DC-2006,15.91
2006,SAT,SAT-2006,33.59
2006,SCD,SCD-2006,1.87
2006,WS,WS-2006,1.42
2006,NG,NG-2006,1.44
2006,TG16,TG16-2006,0.16
2006,3DO,3DO-2006,0.1
2006,GG,GG-2006,0.04
2006,PCFX,PCFX-2006,0.03
2007,Wii,Wii-2007,292.88
2007,NES,NES-2007,251.07
2007,GB,GB-2007,254.42
2007,DS,DS-2007,419.39
2007,PS2,PS2-2007,1147.08
2007,SNES,SNES-2007,200.05
2007,GBA,GBA-2007,313.56
2007,X360,X360-2007,156.04
2007,N64,N64-2007,218.21
2007,PS,PS-2007,727.39
2007,XB,XB-2007,251.91
2007,2600,2600-2007,86.57
2007,PSP,PSP-2007,154.69
2007,GC,GC-2007,197.14
2007,PS3,PS3-2007,94.88
2007,PC,PC-2007,105.09
2007,GEN,GEN-2007,28.36
2007,DC,DC-2007,15.93
2007,SAT,SAT-2007,33.59
2007,SCD,SCD-2007,1.87
2007,WS,WS-2007,1.42
2007,NG,NG-2007,1.44
2007,TG16,TG16-2007,0.16
2007,3DO,3DO-2007,0.1
2007,GG,GG-2007,0.04
2007,PCFX,PCFX-2007,0.03
2008,Wii,Wii-2008,467.04
2008,NES,NES-2008,251.07
2008,GB,GB-2008,254.42
2008,DS,DS-2008,567.28
2008,PS2,PS2-2008,1200.91
2008,SNES,SNES-2008,200.05
2008,GBA,GBA-2008,313.56
2008,X360,X360-2008,291.8
2008,N64,N64-2008,218.21
2008,PS,PS-2008,727.39
2008,PS3,PS3-2008,214.57
2008,XB,XB-2008,252.09
2008,2600,2600-2008,86.57
2008,PSP,PSP-2008,189.37
2008,GC,GC-2008,197.14
2008,PC,PC-2008,117.76
2008,GEN,GEN-2008,28.36
2008,DC,DC-2008,15.97
2008,SAT,SAT-2008,33.59
2008,SCD,SCD-2008,1.87
2008,WS,WS-2008,1.42
2008,NG,NG-2008,1.44
2008,TG16,TG16-2008,0.16
2008,3DO,3DO-2008,0.1
2008,GG,GG-2008,0.04
2008,PCFX,PCFX-2008,0.03
2009,Wii,Wii-2009,677.48
2009,NES,NES-2009,251.07
2009,GB,GB-2009,254.42
2009,DS,DS-2009,689.27
2009,PS2,PS2-2009,1227.36
2009,SNES,SNES-2009,200.05
2009,GBA,GBA-2009,313.56
2009,X360,X360-2009,412.65
2009,N64,N64-2009,218.21
2009,PS,PS-2009,727.39
2009,PS3,PS3-2009,346.91
2009,XB,XB-2009,252.09
2009,PC,PC-2009,134.92
2009,2600,2600-2009,86.57
2009,PSP,PSP-2009,227.44
2009,GC,GC-2009,197.14
2009,GEN,GEN-2009,28.36
2009,DC,DC-2009,15.97
2009,SAT,SAT-2009,33.59
2009,SCD,SCD-2009,1.87
2009,WS,WS-2009,1.42
2009,NG,NG-2009,1.44
2009,TG16,TG16-2009,0.16
2009,3DO,3DO-2009,0.1
2009,GG,GG-2009,0.04
2009,PCFX,PCFX-2009,0.03
2010,Wii,Wii-2010,809.28
2010,NES,NES-2010,251.07
2010,GB,GB-2010,254.42
2010,DS,DS-2010,777.25
2010,X360,X360-2010,583.7
2010,PS2,PS2-2010,1232.99
2010,SNES,SNES-2010,200.05
2010,GBA,GBA-2010,313.56
2010,PS3,PS3-2010,491.33
2010,N64,N64-2010,218.21
2010,PS,PS-2010,727.39
2010,XB,XB-2010,252.09
2010,PC,PC-2010,159.38
2010,2600,2600-2010,86.57
2010,PSP,PSP-2010,262.55
2010,GC,GC-2010,197.14
2010,GEN,GEN-2010,28.36
2010,DC,DC-2010,15.97
2010,SAT,SAT-2010,33.59
2010,SCD,SCD-2010,1.87
2010,WS,WS-2010,1.42
2010,NG,NG-2010,1.44
2010,TG16,TG16-2010,0.16
2010,3DO,3DO-2010,0.1
2010,GG,GG-2010,0.04
2010,PCFX,PCFX-2010,0.03
2011,Wii,Wii-2011,871.69
2011,NES,NES-2011,251.07
2011,GB,GB-2011,254.42
2011,DS,DS-2011,805.05
2011,X360,X360-2011,728.82
2011,PS2,PS2-2011,1233.46
2011,SNES,SNES-2011,200.05
2011,GBA,GBA-2011,313.56
2011,PS3,PS3-2011,650.7
2011,3DS,3DS-2011,62.53
2011,N64,N64-2011,218.21
2011,PS,PS-2011,727.39
2011,XB,XB-2011,252.09
2011,PC,PC-2011,194.63
2011,2600,2600-2011,86.57
2011,PSP,PSP-2011,280.44
2011,GC,GC-2011,197.14
2011,GEN,GEN-2011,28.36
2011,DC,DC-2011,15.97
2011,SAT,SAT-2011,33.59
2011,PSV,PSV-2011,5.15
2011,SCD,SCD-2011,1.87
2011,WS,WS-2011,1.42
2011,NG,NG-2011,1.44
2011,TG16,TG16-2011,0.16
2011,3DO,3DO-2011,0.1
2011,GG,GG-2011,0.04
2011,PCFX,PCFX-2011,0.03
2012,Wii,Wii-2012,894.46
2012,NES,NES-2012,251.07
2012,GB,GB-2012,254.42
2012,DS,DS-2012,816.69
2012,X360,X360-2012,829.7
2012,PS2,PS2-2012,1233.46
2012,SNES,SNES-2012,200.05
2012,GBA,GBA-2012,313.56
2012,PS3,PS3-2012,760.19
2012,3DS,3DS-2012,113.67
2012,N64,N64-2012,218.21
2012,PS,PS-2012,727.39
2012,XB,XB-2012,252.09
2012,PC,PC-2012,218.16
2012,2600,2600-2012,86.57
2012,PSP,PSP-2012,288.16
2012,GC,GC-2012,197.14
2012,GEN,GEN-2012,28.36
2012,WiiU,WiiU-2012,17.84
2012,DC,DC-2012,15.97
2012,SAT,SAT-2012,33.59
2012,PSV,PSV-2012,23.68
2012,SCD,SCD-2012,1.87
2012,WS,WS-2012,1.42
2012,NG,NG-2012,1.44
2012,TG16,TG16-2012,0.16
2012,3DO,3DO-2012,0.1
2012,GG,GG-2012,0.04
2012,PCFX,PCFX-2012,0.03
2013,Wii,Wii-2013,903.82
2013,NES,NES-2013,251.07
2013,GB,GB-2013,254.42
2013,DS,DS-2013,818.65
2013,X360,X360-2013,919.31
2013,PS3,PS3-2013,877.58
2013,PS2,PS2-2013,1233.46
2013,SNES,SNES-2013,200.05
2013,GBA,GBA-2013,313.56
2013,3DS,3DS-2013,169.55
2013,N64,N64-2013,218.21
2013,PS,PS-2013,727.39
2013,XB,XB-2013,252.09
2013,PC,PC-2013,230.99
2013,2600,2600-2013,86.57
2013,PSP,PSP-2013,291.35
2013,GC,GC-2013,197.14
2013,GEN,GEN-2013,28.36
2013,WiiU,WiiU-2013,39.68
2013,PS4,PS4-2013,24.76
2013,XOne,XOne-2013,18.6
2013,DC,DC-2013,15.97
2013,SAT,SAT-2013,33.59
2013,PSV,PSV-2013,36.37
2013,SCD,SCD-2013,1.87
2013,WS,WS-2013,1.42
2013,NG,NG-2013,1.44
2013,TG16,TG16-2013,0.16
2013,3DO,3DO-2013,0.1
2013,GG,GG-2013,0.04
2013,PCFX,PCFX-2013,0.03
2014,Wii,Wii-2014,908.26
2014,NES,NES-2014,251.07
2014,GB,GB-2014,254.42
2014,DS,DS-2014,818.67
2014,X360,X360-2014,955.73
2014,PS3,PS3-2014,928.54
2014,PS2,PS2-2014,1233.46
2014,SNES,SNES-2014,200.05
2014,GBA,GBA-2014,313.56
2014,3DS,3DS-2014,212.69
2014,PS4,PS4-2014,123.52
2014,N64,N64-2014,218.21
2014,PS,PS-2014,727.39
2014,XB,XB-2014,252.09
2014,PC,PC-2014,244.38
2014,2600,2600-2014,86.57
2014,PSP,PSP-2014,291.59
2014,GC,GC-2014,197.14
2014,WiiU,WiiU-2014,62.19
2014,GEN,GEN-2014,28.36
2014,XOne,XOne-2014,71.03
2014,DC,DC-2014,15.97
2014,PSV,PSV-2014,51.11
2014,SAT,SAT-2014,33.59
2014,SCD,SCD-2014,1.87
2014,WS,WS-2014,1.42
2014,NG,NG-2014,1.44
2014,TG16,TG16-2014,0.16
2014,3DO,3DO-2014,0.1
2014,GG,GG-2014,0.04
2014,PCFX,PCFX-2014,0.03
2015,Wii,Wii-2015,909.81
2015,NES,NES-2015,251.07
2015,GB,GB-2015,254.42
2015,DS,DS-2015,818.67
2015,X360,X360-2015,968.78
2015,PS3,PS3-2015,946.76
2015,PS2,PS2-2015,1233.46
2015,SNES,SNES-2015,200.05
2015,GBA,GBA-2015,313.56
2015,3DS,3DS-2015,239.68
2015,PS4,PS4-2015,238.82
2015,N64,N64-2015,218.21
2015,PS,PS-2015,727.39
2015,XB,XB-2015,252.09
2015,PC,PC-2015,252.45
2015,2600,2600-2015,86.57
2015,PSP,PSP-2015,291.71
2015,XOne,XOne-2015,128.69
2015,GC,GC-2015,197.14
2015,WiiU,WiiU-2015,78.57
2015,GEN,GEN-2015,28.36
2015,DC,DC-2015,15.97
2015,PSV,PSV-2015,58.21
2015,SAT,SAT-2015,33.59
2015,SCD,SCD-2015,1.87
2015,WS,WS-2015,1.42
2015,NG,NG-2015,1.44
2015,TG16,TG16-2015,0.16
2015,3DO,3DO-2015,0.1
2015,GG,GG-2015,0.04
2015,PCFX,PCFX-2015,0.03
2016,Wii,Wii-2016,909.81
2016,NES,NES-2016,251.07
2016,GB,GB-2016,254.42
2016,DS,DS-2016,818.67
2016,X360,X360-2016,969.61
2016,PS3,PS3-2016,949.35
2016,PS2,PS2-2016,1233.46
2016,SNES,SNES-2016,200.05
2016,GBA,GBA-2016,313.56
2016,3DS,3DS-2016,246.28
2016,PS4,PS4-2016,278.07
2016,N64,N64-2016,218.21
2016,PS,PS-2016,727.39
2016,XB,XB-2016,252.09
2016,PC,PC-2016,255.05
2016,2600,2600-2016,86.57
2016,PSP,PSP-2016,291.71
2016,XOne,XOne-2016,141.06
2016,GC,GC-2016,197.14
2016,WiiU,WiiU-2016,81.86
2016,GEN,GEN-2016,28.36
2016,DC,DC-2016,15.97
2016,PSV,PSV-2016,61.61
2016,SAT,SAT-2016,33.59
2016,SCD,SCD-2016,1.87
2016,WS,WS-2016,1.42
2016,NG,NG-2016,1.44
2016,TG16,TG16-2016,0.16
2016,3DO,3DO-2016,0.1
2016,GG,GG-2016,0.04
2016,PCFX,PCFX-2016,0.03
2017,Wii,Wii-2017,909.81
2017,NES,NES-2017,251.07
2017,GB,GB-2017,254.42
2017,DS,DS-2017,818.67
2017,X360,X360-2017,969.61
2017,PS3,PS3-2017,949.35
2017,PS2,PS2-2017,1233.46
2017,SNES,SNES-2017,200.05
2017,GBA,GBA-2017,313.56
2017,3DS,3DS-2017,246.28
2017,PS4,PS4-2017,278.1
2017,N64,N64-2017,218.21
2017,PS,PS-2017,727.39
2017,XB,XB-2017,252.09
2017,PC,PC-2017,255.05
2017,2600,2600-2017,86.57
2017,PSP,PSP-2017,291.71
2017,XOne,XOne-2017,141.06
2017,GC,GC-2017,197.14
2017,WiiU,WiiU-2017,81.86
2017,GEN,GEN-2017,28.36
2017,DC,DC-2017,15.97
2017,PSV,PSV-2017,61.63
2017,SAT,SAT-2017,33.59
2017,SCD,SCD-2017,1.87
2017,WS,WS-2017,1.42
2017,NG,NG-2017,1.44
2017,TG16,TG16-2017,0.16
2017,3DO,3DO-2017,0.1
2017,GG,GG-2017,0.04
2017,PCFX,PCFX-2017,0.03
2018,Wii,Wii-2018,909.81
2018,NES,NES-2018,251.07
2018,GB,GB-2018,254.42
2018,DS,DS-2018,818.67
2018,X360,X360-2018,969.61
2018,PS3,PS3-2018,949.35
2018,PS2,PS2-2018,1233.46
2018,SNES,SNES-2018,200.05
2018,GBA,GBA-2018,313.56
2018,3DS,3DS-2018,246.28
2018,PS4,PS4-2018,278.1
2018,N64,N64-2018,218.21
2018,PS,PS-2018,727.39
2018,XB,XB-2018,252.09
2018,PC,PC-2018,255.05
2018,2600,2600-2018,86.57
2018,PSP,PSP-2018,291.71
2018,XOne,XOne-2018,141.06
2018,GC,GC-2018,197.14
2018,WiiU,WiiU-2018,81.86
2018,GEN,GEN-2018,28.36
2018,DC,DC-2018,15.97
2018,PSV,PSV-2018,61.63
2018,SAT,SAT-2018,33.59
2018,SCD,SCD-2018,1.87
2018,WS,WS-2018,1.42
2018,NG,NG-2018,1.44
2018,TG16,TG16-2018,0.16
2018,3DO,3DO-2018,0.1
2018,GG,GG-2018,0.04
2018,PCFX,PCFX-2018,0.03
2019,Wii,Wii-2019,909.81
2019,NES,NES-2019,251.07
2019,GB,GB-2019,254.42
2019,DS,DS-2019,818.67
2019,X360,X360-2019,969.61
2019,PS3,PS3-2019,949.35
2019,PS2,PS2-2019,1233.46
2019,SNES,SNES-2019,200.05
2019,GBA,GBA-2019,313.56
2019,3DS,3DS-2019,246.28
2019,PS4,PS4-2019,278.1
2019,N64,N64-2019,218.21
2019,PS,PS-2019,727.39
2019,XB,XB-2019,252.09
2019,PC,PC-2019,255.05
2019,2600,2600-2019,86.57
2019,PSP,PSP-2019,291.71
2019,XOne,XOne-2019,141.06
2019,GC,GC-2019,197.14
2019,WiiU,WiiU-2019,81.86
2019,GEN,GEN-2019,28.36
2019,DC,DC-2019,15.97
2019,PSV,PSV-2019,61.63
2019,SAT,SAT-2019,33.59
2019,SCD,SCD-2019,1.87
2019,WS,WS-2019,1.42
2019,NG,NG-2019,1.44
2019,TG16,TG16-2019,0.16
2019,3DO,3DO-2019,0.1
2019,GG,GG-2019,0.04
2019,PCFX,PCFX-2019,0.03
2020,Wii,Wii-2020,909.81
2020,NES,NES-2020,251.07
2020,GB,GB-2020,254.42
2020,DS,DS-2020,818.96
2020,X360,X360-2020,969.61
2020,PS3,PS3-2020,949.35
2020,PS2,PS2-2020,1233.46
2020,SNES,SNES-2020,200.05
2020,GBA,GBA-2020,313.56
2020,3DS,3DS-2020,246.28
2020,PS4,PS4-2020,278.1
2020,N64,N64-2020,218.21
2020,PS,PS-2020,727.39
2020,XB,XB-2020,252.09
2020,PC,PC-2020,255.05
2020,2600,2600-2020,86.57
2020,PSP,PSP-2020,291.71
2020,XOne,XOne-2020,141.06
2020,GC,GC-2020,197.14
2020,WiiU,WiiU-2020,81.86
2020,GEN,GEN-2020,28.36
2020,DC,DC-2020,15.97
2020,PSV,PSV-2020,61.63
2020,SAT,SAT-2020,33.59
2020,SCD,SCD-2020,1.87
2020,WS,WS-2020,1.42
2020,NG,NG-2020,1.44
2020,TG16,TG16-2020,0.16
2020,3DO,3DO-2020,0.1
2020,GG,GG-2020,0.04
2020,PCFX,PCFX-2020,0.03
    */}