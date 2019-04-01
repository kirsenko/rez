function initialiseSlider(elem, images, width, height){
	var container = document.createElement('div')
	container.style = "border:1px solid;width:"+width+"px;height:"+height+"px;margin:auto;position:relative;overflow:hidden;"
	elem.appendChild(container)
	for(var i = 0; i < images.length;i++){
		var img = document.createElement('img')
		var imgDiv = document.createElement('div')
		imgDiv.style = "height:"+height+"px;width:"+width+"px;position:absolute;top:0;left:"+(i-1)*width+"px;transition:1s;backgroud:white;"
		img.setAttribute('src', images[i])
		img.setAttribute('alt', 'image'+images[i])
		img.style = "height:100%;max-width:"+width+"px;display:block;margin:auto;cursor:pointer;"
		var flag = true
		container.onclick = function(event){
			if(event.target.tagName == 'IMG' && flag){
				flag = false
				var key = setTimeout(function(){
					flag = true
					clearTimeout(key)
				},1000)
				var imgElems = container.children
				for(var j = 0; j < imgElems.length; j++){
					imgElems[j].style.left = parseInt(imgElems[j].style.left,10) - width + 'px';
				}
				var tempImg;
				if(parseInt(event.target.parentElement.previousElementSibling.style.left,10) < 0 ){
					tempImg = event.target.parentElement.previousElementSibling.cloneNode(true)
					container.removeChild(event.target.parentElement.previousElementSibling)
					container.appendChild(tempImg)
					tempImg.style.left = width*(imgElems.length - 2) + 'px'
					// this.parentElement.style.zIndex = 4
				}
				var time = setTimeout(function(){
					tempImg.style.transition = '1s';
					clearTimeout(time)
				})
			}
		}
		imgDiv.appendChild(img)
		container.appendChild(imgDiv)
	}
}


initialiseSlider(slider,['1.jpg','2.jpg','3.jpg','5.jpg','4.jpg'],500,500)