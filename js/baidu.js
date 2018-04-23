/**
 * Created by zjgz on 2018/4/15.
 */
$(function(){
    //alert(111);
    //$('.parent_box').click(function(){
    //    alert(11)
    //});

    $('#aT').click(function(){
        $('.parent_box').hide()
    });

    $('#bt_confirm').click(function(){
        //alert("啦啦啦确定啦。。。")
        $('#aT').html('标题二')
    })
});
