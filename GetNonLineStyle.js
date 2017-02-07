
function getStyle(obj,attr,value){
if(!value){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj,false)[attr];
		}
	}
	else{
	obj.style[attr]=value;return value;
	}
}
	