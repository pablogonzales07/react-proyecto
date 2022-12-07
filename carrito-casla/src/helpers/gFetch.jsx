const productos = [
  {"id": "1" , "nombre": "camiseta titular año 2014" , "categoria": "remeras", "precio": 8500, "img": "https://img.planetafobal.com/2014/03/camiseta-titular-lotto-san-lorenzo-2014.jpg"},
  {"id": "2" , "nombre": "camiseta suplente año 2014" , "categoria": "remeras", "precio": 7000, "img": "https://img.planetafobal.com/2014/03/camiseta-suplente-lotto-san-lorenzo-2014.jpg"},
  {"id": "3" , "nombre": "camiseta titular año 2015", "categoria": "remeras", "precio": 9000, "img": "http://d3ugyf2ht6aenh.cloudfront.net/stores/384/008/products/casla-20151-ca1b3f9434452e183416186659212949-640-0.png"},
  {"id": "4" , "nombre": "camiseta suplente año 2015", "categoria": "remeras", "precio": 7900, "img": "https://img.planetafobal.com/2015/01/camiseta-suplente-nike-san-lorenzo-2015-frente.jpg"},
  {"id": "5" , "nombre": "camiseta titular año 2016", "categoria": "remeras", "precio": 10000, "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/220/451/products/779817-mla42007570297_052020-f-0cbe3134964bf6584015919179258888-1024-1024.jpg"},
  {"id": "6" , "nombre": "camiseta suplente año 2016", "categoria": "remeras", "precio": 9600, "img": "https://http2.mlstatic.com/D_NQ_NP_652408-MLA51512680564_092022-O.webp"},
  {"id": "7" , "nombre": "camiseta titular año 2017", "categoria": "remeras", "precio": 12000, "img": "http://d3ugyf2ht6aenh.cloudfront.net/stores/384/008/products/numeros-velez-sarfield-titutar-y-suplente-umbro-2015-902111-mla20474858408_112015-o-500x5001-a7d57a00fc0b657f1616357296099377-640-0.jpg"},
  {"id": "8" , "nombre": "camiseta suplente año 2017", "categoria": "remeras", "precio": 10500, "img": "https://http2.mlstatic.com/D_NQ_NP_882728-MLA29468470321_022019-O.jpg"},
  {"id": "9" , "nombre": "pantalon algodon negro", "categoria": "pantalones", "precio": 7500, "img": "https://http2.mlstatic.com/D_NQ_NP_671724-MLA49548052256_042022-W.jpg"},
  {"id": "10" , "nombre": "pantalon con tiras azules", "categoria": "pantalones", "precio": 6500, "img": "https://http2.mlstatic.com/D_NQ_NP_981273-MLA28134978246_092018-O.webp"},
  {"id": "11" , "nombre": "buzo rojo entrenamiento", "categoria": "buzos", "precio": 12500, "img": "https://http2.mlstatic.com/D_NQ_NP_838486-MLA32477131161_102019-O.jpg"},
  {"id": "12" , "nombre": "buzo algodon negro", "categoria": "buzos", "precio": 4500, "img": "http://d3ugyf2ht6aenh.cloudfront.net/stores/944/335/products/san-lorenzo-2-logo-c-cuervo1-892a5648e9dd5ea1da16099772450005-640-0.jpg"},
  {"id": "13" , "nombre": "medias algodon casla", "categoria": "medias", "precio": 2500, "img": "https://http2.mlstatic.com/D_NQ_NP_640260-MLA49155132653_022022-O.jpg"},
  {"id": "14" , "nombre": "medias negras casla", "categoria": "medias", "precio": 1500, "img": "https://http2.mlstatic.com/D_NQ_NP_666949-MLA47208581206_082021-W.jpg"},
  {"id": "15" , "nombre": "barbijo casla", "categoria": "accesorios", "precio": 1000, "img": "https://d2r9epyceweg5n.cloudfront.net/stores/868/618/products/1200471-976b7a90b3d0e77bd116183414110918-480-0.jpg"},
  {"id": "16" , "nombre": "llavero casla", "categoria": "accesorios", "precio": 1200, "img": "https://http2.mlstatic.com/D_NQ_NP_781992-MLA44330951271_122020-O.webp"}
  ]
  
  
  
  
 export const gFetch = () => {
    return new Promise ((res, rej) => {
      let condition = true;
      if (condition) {
        setTimeout(() => {
          res(productos)       
        }, 1000);
      }
      else{
        rej("Se ha producido un error")
      }
    })
  }

