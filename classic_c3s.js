<!--C3s Sistemas - www.c3s.com.br-->
<!--todos os direitos reservados-->

function Abrir(end,w,h) {
       var hh=Math.abs(h)+0;
       var ww=Math.abs(w)+0;
       loc=end;
  prop='toolbar=1,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,screenX=0,screenY=0,width=' + ww + ',height=' + hh;
       janela=window.open(loc,"win",prop)
       }


 function Entra()
 { 
  window.status='Clique para obter mais informações';
 }
 function Sai()
  { 
   window.status=' ';
 }

 
function Is() {
    var agent = navigator.userAgent.toLowerCase();
    this.major = parseInt(navigator.appVersion);
    this.minor = parseFloat(navigator.appVersion);
    this.ns  = ((agent.indexOf('mozilla')!=-1) && ((agent.indexOf('spoofer')==-1) && (agent.indexOf('compatible') == -1)));
    this.ns2 = (this.ns && (this.major == 2));
    this.ns3 = (this.ns && (this.major == 3));
    this.ns4b = (this.ns && (this.minor < 4.04));
    this.ns4 = (this.ns && (this.major >= 4));
    this.ie   = (agent.indexOf("msie") != -1);
    this.ie3  = (this.ie && (this.major == 2));
    this.ie4  = (this.ie && (this.major >= 4));
    this.op3 = (agent.indexOf("opera") != -1);
}
var is = new Is();
if(is.ns4) {
    doc = "document";
    sty = "";
    htm = ".document"
    xpos = "e.contentX";
    ypos = "e.contentY";
} else if(is.ie4) {
    doc = "document.all";
    sty = ".style";
    htm = ""
    xpos = "event.x";
    ypos = "event.y";
} else  {
    alert("Este site utiliza recursos disponíveis nas versões 4.0 do Internet Explorer e Netscape Navigator. Verifique se o seu browser é adequado")
 }

N = (document.all) ? 0 : 1;
var ob;
var i = 0;
var yy = 0;


function MD(e) {
textoLyr = eval(doc + '["Texto"]' + sty);
if (N) {
  if (e.target.name == "mao")
  {  
     ob = document.layers[e.target.name];
     Y=e.y;
     return false;
   }
   else
   {
     return true;
   }
}
else {
  if (event.srcElement.name == "mao")
   { 
     ob = event.srcElement.parentElement.style;
     Y=event.offsetY;
     return false; 
   }
   else
   {
    return true;
    }
}
}
function MM(e) {
  if (ob) {
    if (N) {
      if (((e.pageY-Y) >= 0) && ((e.pageY-Y) + 20 <= innerHeight)) {
        ob.moveTo(560, (e.pageY-Y));
        textoLyr.top = -(e.pageY-Y)*(textoLyr.clip.bottom/innerHeight);
      }
    }
    else {
    if (((event.clientY-Y + document.body.scrollTop) >= 0)&&((event.clientY-Y + document.body.scrollTop) + 20 <= document.body.clientHeight)){
      ob.pixelLeft = 560;
      ob.pixelTop = event.clientY-Y + document.body.scrollTop;
      textoLyr.pixelTop = -(event.clientY-Y + document.body.scrollTop)*(400/document.body.clientHeight);
      return false;
      }
    }
  }
}
function MU() {
  ob = null;
  return true;
}

if (N) {
  document.captureEvents(Event.MOUSEDOWN | Event.MOUSEMOVE | Event.MOUSEUP);
}
document.onmousedown = MD;
document.onmousemove = MM;
document.onmouseup = MU; 
