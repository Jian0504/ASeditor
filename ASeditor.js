// $('#imageUpload').on('click',function(){
//     $(this).val('')
//     var node= window.getSelection().anchorNode;// 判断是否有光标
//     if(node!=null){
//         range = window.getSelection().getRangeAt(0);
//     }else{
//         $('#article-content').focus()
//         range = window.getSelection().getRangeAt(0);
//     }
// });
// $('#imageUpload').on('change',function(){
// //			var fileone=$('#imageUpload')[0].files[0]
//     var ua = navigator.userAgent.toLowerCase();	//判断系统
//     var fileone=document.getElementById("imageUpload").files[0]
//     if(fileone){
//         var newfile = new File([fileone], new Date().getTime()+".jpg",{type:"image/jpeg"});
//         if (/iphone|ipad|ipod/.test(ua)) {
//             files.push(fileone)
//             var src = window.URL.createObjectURL(fileone);
//             var name=fileone.name
//         } else if (/android/.test(ua)) {
//             files.push(newfile)
//             var src = window.URL.createObjectURL(newfile);
//             var name=newfile.name
//         }
//         var divElement = document.createElement("div")
//         var imgElement=`<img src="${src}" data-name="${name}" style="width:60%">`
//         $(divElement).html(imgElement)
//         range.insertNode(divElement);// 在光标位置插入该对象
//     }
// })
//
