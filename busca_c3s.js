<!--C3s Sistemas - www.c3s.com.br-->
<!--todos os direitos reservados-->

function Abrir(end,w,h) {
       var hh=Math.abs(h)+0;
       var ww=Math.abs(w)+0;
       loc=end;
  prop='toolbar=1,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,screenX=0,screenY=0,width=' + ww + ',height=' + hh;
       janela=window.open(loc,"win",prop)
       }


function checkData (){
		if (document.envia.palavra.value.length < 1) {
		   alert("Entre com alguma palavra para a pesquisa")
  		   }
                else
		   {
		    destino = "script/resultado.asp?tipo=busca&p_arquivo=&palavra=" + document.envia.palavra.value
		    parent.frames["central"].location.href = destino
		    }
		}
function MouseSobre(Ident){
if (Ident == "memvisBV"){
	    document.f_baiavitoria.src="fig/MemVisBV_b.jpg";
	}
if (Ident == "Busca"){
    document.f_busca.src="fig/Busca_b.jpg";
	}
	if (Ident == "Inicio"){
		document.f_inicio.src="fig/Inicio_b.jpg";
	}
if (Ident == "Data"){
    document.f_data.src="fig/Data_b.jpg";
	}
if (Ident == "Autor"){
	    document.f_autor.src="fig/Autor_b.jpg";
	}
if (Ident == "Local"){
	    document.f_local.src="fig/Local_b.jpg";
	}
if (Ident == "Fonte"){
	    document.f_fonte.src="fig/Fonte_b.jpg";
	}
if (Ident == "Iconografia"){
	    document.f_iconografia.src="fig/Iconografia_b.jpg";
	}
if (Ident == "Textos"){
	    document.f_textos.src="fig/Textos_b.jpg";
	}
if (Ident == "Ajuda"){
	    document.f_ajuda.src="fig/Ajuda_b.jpg";
	}
if (Ident == "Creditos"){
	    document.f_creditos.src="fig/Creditos_b.jpg";
	}

	  return true;
}
function MouseSai(Ident){
if (Ident == "memvisBV"){
	    document.f_baiavitoria.src="fig/MemVisBV_a.jpg";
	}
if (Ident == 'Busca'){
    document.f_busca.src="fig/Busca_a.jpg";
	}
	if (Ident == "Inicio"){
		document.f_inicio.src="fig/Inicio_a.jpg";
	}
if (Ident == 'Data'){
    document.f_data.src="fig/Data_a.jpg";
	}
if (Ident == 'Autor'){
	    document.f_autor.src="fig/Autor_a.jpg";
	}
if (Ident == 'Local'){
	    document.f_local.src="fig/Local_a.jpg";
	}
if (Ident == 'Fonte'){
	    document.f_fonte.src="fig/Fonte_a.jpg";
	}
if (Ident == 'Iconografia'){
	    document.f_iconografia.src="fig/Iconografia_a.jpg";
	}
if (Ident == 'Textos'){
	    document.f_textos.src="fig/Textos_a.jpg";
	}
if (Ident == 'Ajuda'){
	    document.f_ajuda.src="fig/Ajuda_a.jpg";
	}
if (Ident == 'Creditos'){
	    document.f_creditos.src="fig/Creditos_a.jpg";
	}

	  return true;
}
