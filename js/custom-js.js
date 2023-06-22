
function toggleOrder(item) {
    console.log(item)
    document.getElementById("link-shopee").href = `https://shopee.co.id/${linkShopee(item)}`
    document.getElementById("link-whatsapp").href = `https://wa.me/6285703059300?text=${linkWhatsapp(item)}`
    document.getElementById("boxOrder").classList.toggle("show-order");
  }

  function linkWhatsapp(params) {
    var productDescription
    switch (params) {
      case 'makroni':
        productDescription = "makroni untuk di rumah"
        break;

      case 'Basreng-Pedas':
        productDescription = "basreng untuk di rumah"
        break;

        case 'Kerang-Pedas':
          productDescription = "kerang pedas untuk di rumah"
          break;

        case 'Keripik-Pisang-Coklat':
           productDescription = "kripik pisang coklat untuk di rumah"
           break;
    

      default:
        break;
    }
    let uri = `selamat datang di toko kami, apakah anda ingin memesan ${productDescription}`;
    return encodeURI(uri);
  }

  function linkShopee(params) {
    var link
    switch (params) {
      case 'makroni':
        link =
          'makaroni-pipa-kemasan-1kg-varian-rasa-i.33759271.3797438304?sp_atk=8f1c1341-b599-46f0-9761-730908492b24&xptdk=8f1c1341-b599-46f0-9761-730908492b24'
        break;
      case 'Basreng-Pedas':
        link =
          'Paket-reseller-basreng-sultan-pedas-daun-jeruk-isi-100gram-i.894261210.17188976615?sp_atk=58c3b5e8-f3cd-4b05-8e4f-769b2771c12d&xptdk=58c3b5e8-f3cd-4b05-8e4f-769b2771c12d'
        break;
      case 'Kerang-Pedas' :
        link =
          'MAKARONI-KERANG-DAUN-JERUK-KRIUK-TIDAK-KERAS-i.52096948.9723661757?sp_atk=1e74e0a4-38fb-45fc-a294-17fc9b3e84f5&xptdk=1e74e0a4-38fb-45fc-a294-17fc9b3e84f5'
        break;
      case 'Keripik-Pisang-Coklat' :
        link =
          'Keripik-Pisang-Cokelat-By-MamaOke-i.275282778.3942348947?sp_atk=a814ee82-17bf-4b77-9951-2f44b23b0a0d&xptdk=a814ee82-17bf-4b77-9951-2f44b23b0a0d'
        break;

      default:
        break;
    }
    return link;
  }
