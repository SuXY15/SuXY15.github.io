/*
send form data via ajax and return the data to callback function
*/

function send_form( name , func )
{
	var url = $('#'+name).attr('action');

	var params = {};
	$.each( $('#'+name).serializeArray(), function(index,value)
	{
		params[value.name] = value.value;
	});


	$.post( url , params , func );
    confirm("Done")
}

/*
send form data via ajax and show the return content to pop div
*/

function send_form_pop( name )
{
	return send_form( name , function( data ){ show_pop_box( data ); } );
}


function send_form_pic( name , seditor , callback )
{
	console.log('in');
	// 如果sim编辑器中有图片，检查图片
	var count = $(".simditor-body img[ref!='getgot']").length;
	if( count > 0 )
	{
		var f = $(".simditor-body img[ref!='getgot']").first();
		var reg = /\/\/anime-(.+)\.stor\.sinaapp\.com/;
		var url = f.attr('src');

		console.log( url );

		if(!reg.test(url))
		{
			$.notify('正在保存远程图片');

			// 如果存在其他网站的图片
			$.post( '/?c=default&a=snap_img'  , { 'url': url } , function( data )
			{
				var data_obj = jQuery.parseJSON( data );
				console.log( data_obj  );

				if( data_obj.errno == 0  )
				{
					f.attr('src',data_obj.dataset);
					//seditor.setValue($(".simditor-body").html());
					seditor.sync();
					//console.log($(that).attr('src'));
					//tips(".followlink-"+guid,data_obj.dataset , 'top' );
					$.notify('成功');
				}
				else
				{
					//$.notify('保存远程图片失败');
				}

				f.attr('ref','getgot');

				if( count > 1 )
					$.notify('还有'+ (count-1) + '张远程图片待处理' );

				send_form_pic( name , seditor , callback );

			} );
		}
		else
		{
			console.log('found!'+url);
			f.attr('ref','getgot');
			send_form_pic( name , seditor , callback );
		}



	}
	else
	{
		//alert('end!');
		//console.log($('#editor').val());
		//return ;
		if( !callback || callback  == null )
			return send_form_in( name );
		else
			return send_form( name , callback );
	}

}

function send_form_comment( name , theid ,thetype )
{
	return send_form( name , function(data)
	{
		var cdivname  = thetype+'-'+theid+'-cdiv';
		var data_obj = jQuery.parseJSON( data );
		if( data_obj.errno == 0  )
		{
			if( $('#'+cdivname+' #commentlist li.item').length > 0 )
				$('#'+cdivname+' #commentlist li.item').parent().prepend(data_obj.dataset);
			else
				$('#'+cdivname+' #commentlist').prepend(data_obj.dataset);

			$('#'+cdivname+' #comment_form textarea').val('');
			$('#'+cdivname+' #comment_form textarea').focus();
			$(".timeago").timeago();
			//$('.scroll-pane').jScrollPane();
			$.notify('评论已发布',"success");
			//if( thetype == 'card' ) card_reload( theid );
			//card_reload($('#get_aside').data("last_id"));

		}
		else
		{
			set_form_notice( name , data_obj.errmsg );
		}

	} );
}

function send_form_card( name , seditor  )
{
	if( seditor.getValue().length < 3 )
	{
		alert('卡片的内容最短要3个字符哇。');
		return false;
	}

	return send_form_pic( name , seditor , function( data )
	{
		//console.log("-----start----\r\n");
		//console.log( data  );
		var data_obj = jQuery.parseJSON( data );
		//console.log("-----start----\r\n");
		//console.log( data_obj  );
		//console.log("-----end----\r\n");

		if( data_obj.errno == 0  )
		{
			// 发布成功
			if( data_obj.dataset.update && parseInt(data_obj.dataset.update) == 1)
			{
				// 更新
				location = '/'+data_obj.dataset.cid+'.card';
			}
			else
			{
				// 发布
				$('#cardlist').prepend(data_obj.dataset);
				seditor.setValue('');
				$.notify('卡片发布成功',"success");
				$(".timeago").timeago();
				showlong();
			}

		}
		else
		{
			// 发布失败
			$('#form_'+name+'_notice').html(data_obj.errmsg);
		}
	} );
}

function send_form_wiki( name , seditor  )
{
	if( seditor.getValue().length < 3 )
	{
		alert('知识节点的内容最短要3个字符哇。');
		return false;
	}

	return send_form_pic( name , seditor , function( data )
	{
		console.log(data);
		var data_obj = jQuery.parseJSON( data );

		if( data_obj.errno == 0  )
		{
			$.notify('保存成功，即将转向...',"success");
			setTimeout( function(){ location = '/'+data_obj.dataset.version+'.version' } , 1500 );
		}
		else
			$('#form_'+name+'_notice').html(data_obj.errmsg);
	} );
}

function reply( name , theid , thetype )
{
	var cdivname  = thetype+'-'+theid+'-cdiv';

	$('#'+cdivname+' #comment_form textarea').val($("#comment_form textarea").val()+'@'+name+' ' );
	$('#'+cdivname+' #comment_form textarea').focus();
}

function toggle_comment( theid , thetype )
{
	if( parseInt($(".gcontainer").data("comment_loaded")) == theid )
		hide_aside();
	else
		show_aside( theid , thetype );
}

function toggle_inline_comment( theid , thetype )
{
	console.log('进入函数');
	// 如果评论div存在，而且正在显示，那么添加hidden class
	var cdivname = thetype+'-'+theid +'-cdiv';
	console.log('对象是'+cdivname);

	if( $("#"+cdivname).length < 1 )
	{
		console.log('对象不存在，创建对象');

		show_inline_comment( theid , thetype  );
	}
	else
	{
		console.log('对象已经存在，修改对象显示属性');

		if( $("#"+cdivname).hasClass('hidden') )
			$("#"+cdivname).removeClass('hidden');
		else
			$("#"+cdivname).addClass('hidden');
	}
	//var  = thetype+'-'+theid;

}



function show_inline_comment( theid , thetype )
{
	// 创建div
	var cdivname = thetype+'-'+theid +'-cdiv';
	var did = $('<div id="' + cdivname + '" class="inline"></div>');
	var ccontainername = thetype+'-'+theid;

	console.log('待添加对象是'+ccontainername);

	$('#'+ccontainername).append(did);

	// 动态载入数据
	$.post( '/?c=card&a=comment_list&style=inline&ord=desc'  , { 'theid': theid , 'thetype':thetype } , function( data )
	{
		console.log('请求评论里列表');
		//console.log(data);

		$("#"+ cdivname ).html(data);
		//$('.scroll-pane').jScrollPane();
		$(".timeago").timeago();

		//setTimeout( function(){ $("#"+ cdivname +" #comment_form textarea").focus(); } , 500 );
		enable_at();
	} );

	$("#"+ cdivname +" .content").html('<center class="top50"><img src="/static/image/loading.gif"/></center>');
}

function show_aside( theid , thetype )
{
	$(".gcontainer").data("comment_loaded" , theid ).css("padding-left","0px").css("padding-right","100px");
	var pos = $(".gcontainer").position();
	//var pos2 = $("#cardblock-"+cid).position();
	$("#get_aside").css('left',$(window).width()-500+'px');
	$("#get_aside").css('display','block');
	// 如果上次载入的不是当前cid
	if( parseInt($("#get_aside").data("last_id")) != theid )
	{
		// 动态载入数据
		$.post( '/?c=card&a=comment_list'  , { 'theid': theid , 'thetype':thetype } , function( data )
		{
			$("#get_aside .content").html(data);
			$("#commentlist").css('height',$(window).height()-320+'px');
			$('.scroll-pane').jScrollPane();
			$(".timeago").timeago();

			$("#get_aside").data("last_id",theid);
			$("#comment_form").css('width',$("#get_aside").width()+'px');
			setTimeout( function(){ $("#comment_form textarea").focus(); } , 500 );
			enable_at();
		} );

		$("#get_aside .content").html('<center class="top50"><img src="/static/image/loading.gif"/></center>');
	}
}

function hide_aside()
{
	//$("ul.cards li").removeClass('cactive');
	$(".gcontainer").data("comment_loaded" , 0 ).css("padding-left","100px").css("padding-right","0px");
	$("#get_aside").css('display','none');
}

function load_more( since_id )
{
	$.post( '/?c=card&a=append'  , { 'since_id': since_id } , function( data )
	{
		var data_obj = jQuery.parseJSON( data );
		console.log( data_obj  );

		if( data_obj.errno == 0  )
		{
			// 使用shadow_dom的目的是对返回部分的html进行readmore处理，而不影响card list中已经存在的item
			$('#shadow_dom').html(data_obj.dataset);
			$('#shadow_dom .content').addClass("tomore");
			$('#cardlist').append($("#shadow_dom").html());
			$("#shadow_dom").html('');
			readmore('.tomore');
			highlight();
			setTimeout( function(){ readmore('.tomore');$(".tomore").removeClass("tomore"); } , 500 );

			$(".timeago").timeago();
			//readmore();
			$('.load-more a').html('载入更多');
		}
		else
		{
			$('.load-more').hide();
		}
	} );

	$('.load-more a').html('Loading...');
}

function load_new()
{
	window.location.reload();
}

function set_vcform( postfix )
{
	$("#mailpostfix").html('@'+postfix);
	$("#postfix").val(postfix);
	$(".vcform").css('display','block');
	$("#mailprefix").focus();
	window.scrollTo(0,0);

}

function check_new_card( last_id )
{
	// 只有当前页面存在提示信息图层时才发起请求
	if( $('.new_card_notice').length > 0 )
	{
		$.post( '/?c=card&a=checknew'  , { 'last_id': last_id } , function( data )
		{
			var data_obj = jQuery.parseJSON( data );
			console.log( data_obj  );

			if( data_obj.errno == 0  )
			{
				var count = parseInt(data_obj.dataset.count);
				if( count > 0 )
					$('.new_card_notice').html(data_obj.dataset.notice);
				else
					$('.new_card_notice').html('');
				//tips(".followlink-"+guid,data_obj.dataset , 'top' );
			}
			else
			{
				//$('.load-more').hide();
			}
		} );
	}
}

function mark_notice_read()
{
	$.post( '/?c=default&a=mark_message'  , {} , function( data )
	{

	});
}

$(function(){

    //默认隐藏站内信
    $('.new_message_notice').hide();

});

function check_new_notice()
{
	$.post( '/?c=default&a=check_message'  , {} , function( data )
	{
		var data_obj = jQuery.parseJSON( data );
		//console.log( data_obj  );

		if( data_obj.errno == 0  )
		{
			var count = parseInt(data_obj.dataset.count);
			if( count > 0 )
			{
				if( !$(body).data('oldtitle') ) $(body).data('oldtitle',document.title);
				document.title = '('+ count +')'+$(body).data('oldtitle');

				$('.new_message_notice').html(data_obj.dataset.notice);
				$('.new_message_notice').show();
			}
			else
			{
				if( $(body).data('oldtitle') ) document.title = $(body).data('oldtitle');
				$('.new_message_notice').hide();
			}

			//tips(".followlink-"+guid,data_obj.dataset , 'top' );
		}
		else
		{
			//$('.load-more').hide();
		}
	} );
}

function change2(url)
{
	location = url;
}

function change2new(cate)
{
	location = '/?cate='+cate+'&new=1';
}

function change2hot(cate)
{
	location = '/?cate='+cate+'&new=0';
}


/*
send form data via ajax and show the return content in front of the form
*/
function send_form_in( name )
{
	return send_form( name , function( data ){ set_form_notice( name , data ) } );
}


function set_form_notice( name , data )
{
	data = '<span class="label label-default lable-form">' + data + '</span>';

	if( $('#form_'+name+'_notice').length != 0 )
	{
		$('#form_'+name+'_notice').html(data);
	}
	else
	{
		var odiv = $( "<div class='form_notice'></div>" );
		odiv.attr( 'id' , 'form_'+name+'_notice' );
		odiv.html(data);
		$('#'+name).prepend( odiv );
	}

}

function show_float_box( url , params )
{
	$.post( url  , params , function( data )
	{
		$("#get_float .modal-dialog").html(data);
		$("#get_float").appendTo("body").modal('show');
	} );
}





function show_pop_box( data , popid )
{
	if( popid == undefined ) popid = 'lp_pop_box'
	//console.log($('#' + popid) );
	if( $('#' + popid).length == 0 )
	{
		var did = $('<div><div id="' + 'lp_pop_container' + '"></div></div>');
		did.attr( 'id' , popid );
		did.css( 'display','none' );
		$('body').prepend(did);
	}

	if( data != '' )
		$('#lp_pop_container').html(data);

	var left = ($(window).width() - $('#' + popid ).width())/2;

	$('#' + popid ).css('left',left);
	$('#' + popid ).css('display','block');
}

function hide_pop_box( popid )
{
	if( popid == undefined ) popid = 'lp_pop_box'
	$('#' + popid ).css('display','none');
}

function remove_article( aid )
{
	if( confirm( '确定要删除此文章么？' ) )
	{
		post( '/?c=default&a=remove' , { 'aid':aid } );
	}
}

function remove_post( pid )
{
	if( confirm( '确定要删除此文章么？' ) )
	{
		post( '/?c=forum&a=remove' , { 'pid':pid } );
	}
}



function comment_remove( cid )
{
	if( confirm( '确定要删除本条评论么？' ) )
	{
		$.post( '/?c=card&a=comment_remove'  , { 'cid': cid } , function( data )
		{
			var data_obj = jQuery.parseJSON( data );
			console.log( data_obj  );

			if( data_obj.errno == 0  )
			{
				$("#comment-"+cid).remove();
				$.notify('评论已删除',"success");
				card_reload($("#get_aside").data("last_id"));
			}
			else
			{
				$.notify(data_obj.errmsg);
			}
		} );
	}
}

function card_remove( cid )
{
	if( confirm( '确定要删除此卡片么？' ) )
	{
		$.post( '/?c=card&a=remove'  , { 'cid': cid } , function( data )
		{
			var data_obj = jQuery.parseJSON( data );
			console.log( data_obj  );

			if( data_obj.errno == 0  )
			{
				$("#cardblock-"+cid).remove();
				$.notify('卡片已删除',"success");
			}
			else
			{
				$.notify(data_obj.errmsg);
			}
		} );
	}
}

function card_reload( cid )
{
	$.post( '/?c=card&a=reload'  , { 'cid': cid } , function( data )
	{
		var data_obj = jQuery.parseJSON( data );
		console.log( data_obj  );

		if( data_obj.errno == 0  )
		{
			$("#cardblock-"+cid + " .actionbar").replaceWith(data_obj.dataset);
			$(".timeago").timeago();
		}
		else
		{
			//$.notify(data_obj.errmsg);
		}
	} );
}

function card_like( cid )
{
	$.post( '/?c=card&a=like'  , { 'cid': cid } , function( data )
	{
		var data_obj = jQuery.parseJSON( data );
		console.log( data_obj  );

		if( data_obj.errno == 0  )
		{
			$("#cardblock-"+cid+" li.like").addClass('done');
			card_reload( cid );
		}
		else
		{
			$.notify(data_obj.errmsg);
		}
	} );
}

function card_unlike( cid )
{
	$.post( '/?c=card&a=like'  , { 'cid': cid , 'unlike':1 } , function( data )
	{
		var data_obj = jQuery.parseJSON( data );
		console.log( data_obj  );

		if( data_obj.errno == 0  )
		{
			$("#cardblock-"+cid+" li.like").removeClass('done');
			card_reload( cid );
		}
		else
		{
			$.notify(data_obj.errmsg);
		}
	} );
}

function wiki_official( version )
{
	$.post( '/?c=wiki&a=official'  , { 'version': version } , function( data )
	{
		var data_obj = jQuery.parseJSON( data );
		console.log( data_obj  );

		if( data_obj.errno == 0  )
		{
			tips(".wikiofflink-"+version,'创建成功，1秒后将转向到官方版本' , 'top' );
			setTimeout( function(){ location = '/'+data_obj.dataset + '.version';	 } , 1000 );

		}
		else
		{
			tips(".wikiofflink-"+version,data_obj.errmsg , 'top' );
		}
	} );
}

function wiki_follow( version )
{
	$.post( '/?c=wiki&a=follow'  , { 'version': version } , function( data )
	{
		var data_obj = jQuery.parseJSON( data );
		console.log( data_obj  );

		if( data_obj.errno == 0  )
		{
			window.location.reload();
		}
		else
		{
			tips(".wikifollowlink-"+version,data_obj.errmsg , 'top' );
		}
	} );
}

function wiki_unfollow( version )
{
	$.post( '/?c=wiki&a=unfollow'  , { 'version': version } , function( data )
	{
		var data_obj = jQuery.parseJSON( data );
		console.log( data_obj  );

		if( data_obj.errno == 0  )
		{
			window.location.reload();
		}
		else
		{
			tips(".wikifollowlink-"+version,data_obj.errmsg , 'top' );
		}
	} );
}

function follow( guid )
{
	$.post( '/?c=default&a=follow'  , { 'guid': guid } , function( data )
	{
		var data_obj = jQuery.parseJSON( data );
		console.log( data_obj  );

		if( data_obj.errno == 0  )
		{
			tips(".followlink-"+guid,data_obj.dataset , 'top' );
		}
		else
		{
			tips(".followlink-"+guid,data_obj.errmsg , 'top' );
		}

		//setTimeout( function(){ window.location.reload(); } , 1000 );
	} );
}

function unfollow( guid )
{
	$.post( '/?c=default&a=unfollow'  , { 'guid': guid } , function( data )
	{
		var data_obj = jQuery.parseJSON( data );
		console.log( data_obj  );

		if( data_obj.errno == 0  )
		{
			tips(".followlink-"+guid,data_obj.dataset , 'top' );
		}
		else
		{
			tips(".followlink-"+guid,data_obj.errmsg , 'top' );
		}

		//setTimeout( function(){ window.location.reload(); } , 1000 );
	} );
}

function highlight()
{
	if(hljs)
	{
	    $('pre,code').each(function(i, block) {
	    hljs.highlightBlock(block);
	  });

	}
}

function showlong()
{
	$('ul.cards .card').removeClass('shortpost');
	$('ul.cards .content').removeClass('shortcontent');
}

function readmore( selector )
{
	//console.log('remore');
	$('ul.cards .card').removeClass('shortpost');
	if( !selector ) selector = 'ul.cards .content';
	$(selector).removeClass('shortcontent').readmore({'moreLink':'<a href="#" class="get more"><span class="jdc-arrow-down"></span>展开</a>','lessLink':'<a href="#" class="get less"><span class="jdc-arrow-up"></span>收起</a>'});
}

function add2kb( aid , pos )
{
	$.post( '/?c=default&a=fork'  , { 'aid':aid} , function( data )
	{
		var data_obj = jQuery.parseJSON( data );
		console.log( data_obj  );

		if( data_obj.errno == 0  )
		{
			tips(".kblink-"+aid,data_obj.dataset , pos );
		}
		else
		{
			tips(".kblink-"+aid,data_obj.errmsg , pos );
		}
	} );
	//tips(".kblink-"+aid,"Hi"+aid);
}

function tips( item , text , pos )
{
	pos = pos || "right";

	$(item).notify(text,{ position:pos,className:"success",arrowShow:false });
}

function toggle_user_menu()
{
	if( $('.get-user-menu .dropup').length > 0 )
	{
		$('.get-user-menu').css('height','150');
		$('.get-user-menu .dropup').removeClass('dropup');
	}
	else
	{
		$('.get-user-menu').css('height','50');
		$('.get-user-menu > div').addClass('dropup');
	}


}

function switch_input_box( from , to )
{
	$("#"+to+" textarea").val( $("#"+from).val() );
	$("#"+from).hide();
	$("#"+to).show();
	$("#"+to+" textarea").focus();
	console.log('in'+'from='+from+' to='+to);
}

function make_editor( name )
{
	var seditor = new Simditor({
    textarea: $('#'+name),
    toolbar:['title','bold','strikethrough','ol','ul','indent','outdent','blockquote','code','link','image','wiki','hr'],
    markdown: true,
    placeholder: '好记性不如烂笔头，知识管理从写卡片开始，所以写点什么吧',
    upload:{ 'url':'/?c=default&a=upload' }
	});

	$(".simditor .simditor-body").css('min-height','150px');

	return seditor;
}

function make_at()
{
	$("span.at").each( function()
	{
		$(this).html( $(this).html().replace(/@(\S+)/ig, '<a href="/$1.name" class="get" target="_blank">@$1</a>' ));
	} );


}

function enable_at()
{
	var alist = localStorage.getItem('atlist');
	if( alist )
	{
		people = jQuery.parseJSON(alist);
		$("input.at,textarea.at").atwho({at:"@",data:people});
	}
}

function task_check( name , rid )
{
	$.post( '/?c=check&a=common&func='+name  , { 'rid':rid } , function( data )
	{
		var data_obj = jQuery.parseJSON( data );
		console.log( data_obj  );

		if( data_obj.errno == 0  )
		{
			tips(".task-result-"+rid,'+'+data_obj.dataset.gold, 'top' );
			setTimeout( function(){ window.location.reload(); } , 2000 );
		}
		else
		{
			tips(".task-result-"+rid,data_obj.errmsg, 'top' );
		}
	} );
}

function bottom_check_login()
{
	$.post( '/?c=check&a=common&func=login'  , { 'rid':3 } , function( data )
	{
		var data_obj = jQuery.parseJSON( data );
		console.log( data_obj  );

		if( data_obj.errno == 0  )
		{
			tips(".blogo",'签到成功，金币 +'+data_obj.dataset.gold, 'top' );

		}
		else
		{
			tips(".blogo",data_obj.errmsg, 'top' );
		}
	} );
}

function code_mark_toggle( cid )
{
	if( $('#code_'+cid).hasClass('jdc-star-outline') )
	{
		// 标记为sent
		$.post( '/?c=default&a=code_mark&unsent=0'  , { 'cid':cid } , function( data )
		{
			var data_obj = jQuery.parseJSON( data );

			if( data_obj.errno == 0  )
			{
				tips("#code_"+cid,'标记为已发送', 'top' );
				$('#code_'+cid).removeClass('jdc-star-outline').addClass('jdc-star');
			}
			else
			{
				tips("#code_"+cid,data_obj.errmsg, 'top' );
			}
		} );

	}
	else
	{
		// 标记为unsent
		$.post( '/?c=default&a=code_mark&unsent=1'  , { 'cid':cid } , function( data )
		{
			var data_obj = jQuery.parseJSON( data );

			if( data_obj.errno == 0  )
			{
				tips("#code_"+cid,'标记为未发送', 'top' );
				$('#code_'+cid).removeClass('jdc-star').addClass('jdc-star-outline');
			}
			else
			{
				tips("#code_"+cid,data_obj.errmsg, 'top' );
			}
		} );
	}
}

function post(path, params, newwin) {
    method = "post"; // Set method to post by default if not specified.

    /*
    if( newwin )
    {
	    var form = jQuery('<form/>', {
	    'id':'hform',
	    'method':method ,
	    'action':path,
	    'target':'_blank'
	    });
    }
    else
    {
    	var form = jQuery('<form/>', {
	    'id':'hform',
	    'method':method ,
	    'action':path
	    });
    }*/
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    if( newwin && parseInt(newwin) == 1 )
    	form.setAttribute("target", '_blank');

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
}

function reset_sckey()
{
	if( confirm('确定要重置SCKEY？之前所有调用该KEY的地方都需要做相应的修改哦？') )
	{
		location = '/?c=default&a=reset_sckey';
	}
}

function show_wx_bind_qr()
{
	$.post( '/?c=wechat&a=get_login_qr'  , {} , function( data )
	{
		var data_obj = jQuery.parseJSON( data );

		if( data_obj.errno == 0 && data_obj.dataset && data_obj.dataset.url )
		{
			new QRCode( document.getElementById("wx_bind_qr") , data_obj.dataset.url);
			$("#wx_bind_desp").show();
			$("#wx_bind_btn").hide();
			$("#sid").val(data_obj.dataset.sid);
		}
		else
		{
			alert(data_obj.errmsg);
		}
	} );
}

function toggle_wechat_send( is_on )
{
	$.post( '/?c=wechat&a=toggle_wechat_send'  , { 'on':is_on } , function( data )
	{
		var data_obj = jQuery.parseJSON( data );

		if( data_obj.errno == 0 && data_obj.dataset && data_obj.dataset == 'done'  )
		{
			window.location.reload();
		}
		else
		{
			alert(data_obj.errmsg);
		}
	} );
}

function check_wx_bind( sid )
{
	$.post( '/?c=wechat&a=check_login_qr'  , { 'sid':sid } , function( data )
	{
		var data_obj = jQuery.parseJSON( data );

		if( data_obj.errno == 0 && data_obj.dataset )
		{
			if( data_obj.dataset != 'done' )
				alert('没有绑定成功，有可能二维码已经过期，请刷新页面后再次扫码');
			else
				window.location.reload();
		}
		else
		{
			alert(data_obj.errmsg);
		}
	} );
}




/* post demo
$.post( 'url&get var'  , { 'post':'value'} , function( data )
{
	var data_obj = jQuery.parseJSON( data );
	console.log( data_obj  );

	if( data_obj.err_code == 0  )
	{

	}
	else
	{

	}
} );

*/
