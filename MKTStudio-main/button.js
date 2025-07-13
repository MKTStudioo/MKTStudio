
    function abrirCorreo() {
      const destino = "webs.mkt.studio@gmail.com";
      const asunto = "Consulta desde la web";
      const cuerpo = "Hola MKTStudio, quiero más información sobre sus servicios.";

      const asuntoCodificado = encodeURIComponent(asunto);
      const cuerpoCodificado = encodeURIComponent(cuerpo);

      const esMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

      if (esMobile) {
        // En móvil: abre la app de correo
        window.location.href = `mailto:${destino}?subject=${asuntoCodificado}&body=${cuerpoCodificado}`;
      } else {
        // En escritorio: abre Gmail en navegador
        const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${destino}&su=${asuntoCodificado}&body=${cuerpoCodificado}`;
        window.open(url, '_blank');
      }
    }
  