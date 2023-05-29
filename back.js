
 
    document.addEventListener('DOMContentLoaded', function() {
        var mySwiper = new Swiper('.swiper-container', {
          loop: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          autoplay: {
            delay: 2000,
          },
        });
  
        var imageUrls = [
          
            './pictures/NFT-Sample2.jpg',
            './pictures/NFT-Sample3.jpeg',
            './pictures/NFT-Sample4.jpg',
            './pictures/NFT-Sample5.jpg',
            './pictures/NFT-SAMPLE (1).jpeg',
            './pictures/NFT-SAMPLE (1).jpg',
            './pictures/NFT-SAMPLE (2).jpeg',
            './pictures/NFT-SAMPLE (2).jpg',
            './pictures/NFT-SAMPLE (3).jpeg',
            './pictures/NFT-SAMPLE (3).jpg',
            './pictures/NFT-Sample2.jpg',
            './pictures/NFT-Sample3.jpeg',
            './pictures/NFT-Sample4.jpg',
            './pictures/NFT-Sample5.jpg',
            './pictures/NFT-SAMPLE (1).jpeg',
            './pictures/NFT-SAMPLE (1).jpg',
            './pictures/NFT-SAMPLE (2).jpeg',
            './pictures/NFT-SAMPLE (2).jpg',
            './pictures/NFT-SAMPLE (3).jpeg',
            './pictures/NFT-SAMPLE (3).jpg'
          // Add more image URLs here
        ];
  
       
        var imageElements = document.querySelectorAll('.swiper-slide img');
        
        for (var i = 0; i < imageElements.length; i++) {
          //var randomIndex = Math.floor(Math.random() * imageUrls.length);
          imageElements[i].src = imageUrls[i];
          
        }
      });