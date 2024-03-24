// массив товаров
const selectedProducts = [];

function updateTotal() {
    let total = selectedProducts.reduce(function (sum, item) {
        return sum + item.price * item.quantity;
    }, 0);
    let formattedTotal = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    $('#total').text(formattedTotal);
}

$('#btn-send-request').click(function () {
    console.log(selectedProducts);
});

$('input[type="number"]').change(function () {
    let index = $(this).closest('.list-item').index();
    selectedProducts[index].quantity = parseInt($(this).val());
    updateTotal();
});

$('.list-item').each(function () {
    let price = parseInt($(this).data('price'));
    selectedProducts.push({price: price, quantity: 0});
});

updateTotal();

document.getElementById('show-all-text').addEventListener('click', function () {
    document.querySelector('.content').classList.remove('hidden-text');
    document.getElementById('show-all-text').classList.add('hidden');
    document.getElementById('hidden-text').classList.remove('hidden');
});

document.getElementById('hidden-text').addEventListener('click', function () {
    document.querySelector('.content').classList.add('hidden-text');
    document.getElementById('show-all-text').classList.remove('hidden');
    document.getElementById('hidden-text').classList.add('hidden');
});
let swiper;

function initSwiper() {
    swiper = new Swiper(".swiper", {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
}

if (window.innerWidth < 992) {
    initSwiper();
} else {
    document.getElementById('list-images').classList.remove('swiper-wrapper')
}

window.addEventListener('resize', function () {
    if (window.innerWidth < 992) {
        document.getElementById('list-images').classList.add('swiper-wrapper')
        if (!swiper) {
            initSwiper();
        }
    } else {
        document.getElementById('list-images').classList.remove('swiper-wrapper')
        if (swiper) {
            swiper.destroy();
            swiper = undefined;
        }
    }
});


Fancybox.bind("[data-fancybox]", {});
