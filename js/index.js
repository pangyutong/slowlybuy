$(function(){
    $('#menu').on('click','.row>div:nth-child(8)',function(){
        // alert(1)
        $('#menu>.row>div:nth-last-child(-n+4)').toggle();
        return false;
    })
    getMenuStyle()
    getCategoryStyle()
})
// menu数据的渲染
function getMenuStyle(){
    $.ajax({
        url:url+'api/getindexmenu',
        success:function(data){
            // console.log(data);
            var html =template('menuTpl',data);
            $("#menu>.row").html(html);
        }
    })
}
function getCategoryStyle(){
    $.ajax({
        url:url+'api/getmoneyctrl',
        success:function(data){
            // console.log(data)
            var html = template('categoryTpl',data);
            $('#category>.category_info').html(html);
        }
    })
}