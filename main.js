function showBw() {
  let width = window.innerWidth;

  document.querySelector("h1").innerText = width + "px";
}

window.onload = showBw;
window.onresize = showBw;

let images = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1695824397018-31fa9e2b7a2e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageName: "Prabhupadji",
    imageAlt: "",
    imageLikes: "Infinite",
    imageUserName: "Hari Bol",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1676111266437-027b26837de3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHJhZGhhJTIwYW5kJTIwa3Jpc2huYXxlbnwwfHwwfHx8MA%3D%3D",
    imageName: "Radha Krishna",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },

  {
    imageUrl:
      "https://images.unsplash.com/photo-1718459948558-6c67dc2b4049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
    imageName: "Plant",
    imageAlt: "",
    imageLikes: "2.5k",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1718662514694-e7cbb05d631d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1717967803437-9763df5699b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1718524767521-1aec8589115b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1718554517663-83ffd1ce66f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1718809070453-47e72a835635?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1718489211836-65a20ad6bd8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1716999430646-4a5e75fd5a3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1718813534609-a0c8e93661f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1708275670170-f92d0c82a1d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjh8fHxlbnwwfHx8fHw%3D",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1718202248135-c18af6f6299a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjZ8fHxlbnwwfHx8fHw%3D",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1718398138214-20fa84ca95a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzF8fHxlbnwwfHx8fHw%3D",
    imageName: "China",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/f4/fe/a5/f4fea5b957a81ceb2a65f8cd1f0e3198.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/dd/ac/f4/ddacf49fce93e4723085e43834495dac.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/f8/3b/71/f83b71cd08d7d8669d1501f777afbc3f.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/474x/7f/19/46/7f19469f6b85c3661ff80f339a85a3c0.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/2a/3e/30/2a3e30b3170d5e822421d75c4f467b67.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/474x/15/3d/4a/153d4ae71034097483d1b2f211d5d3ed.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/7b/e4/21/7be4218d6aa8ab357d898db0ab293dae.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/fd/3d/8d/fd3d8db3b563e6432cdf28cbac886ef9.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/46/b5/4a/46b54ad585c2cd4ad4581d0a8efb99b6.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/736x/c3/7d/7d/c37d7dd90dc3579d85f73413fa8242dc.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/564x/c7/f0/5f/c7f05fdd869aab2f1837420dbdab2464.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/564x/66/8b/34/668b34f69417f567f6c90ea13452dc0e.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/564x/48/5c/8b/485c8b0d44330c91a2906fd778a97c9b.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/564x/4c/e7/22/4ce7222f1edb9063531bc00b80fed70c.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/564x/d8/86/d2/d886d2f16bce978129e0523e4721733b.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/474x/a8/db/7c/a8db7c439eabb4d75c32d046fe07116f.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/736x/c3/fe/f6/c3fef6a98dfcc8ca865ea5470541732f.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/df/b9/03/dfb903391242b3968dcb72f2f58012d1.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/15/53/bb/1553bbe0dd286054a159873e84e4b26a.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/8e/62/05/8e6205b3a5bdbb1e4d3f57dfe01abe76.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/77/6a/d7/776ad7f4e8751b384b80fb21b6ac8f1d.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/ce/34/56/ce345690e1364506d7fcfc38760c6b65.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/5f/ae/ff/5faeffd0d801766699bd4ea4c8f1fd92.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/35/ec/4b/35ec4b0f6bbc564b7ab450116e4bb56f.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/61/4a/e6/614ae616702be6af952c0e66bf191834.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/474x/68/f4/38/68f4382a446a89b793c8adcdb093d00a.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/ab/6c/97/ab6c97741be6796e9329f4df2570d153.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/9d/bf/33/9dbf33cd3500472c5f35200ada54f234.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/24/c6/36/24c6363b9963f7adead86131e5ea0e4d.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/3b/24/de/3b24ded9bbe8cfa107203c3206747b4d.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/97/9d/12/979d127ab45587195d6cdded02a4511c.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/00/52/0b/00520b365c38ebc7c1acbca37d7b5240.jpg",
    imageName: "",
    imageAlt: "",
    imageLikes: "",
    imageUserName: "",
  },
];

function addImage() {
  let htmlContent = "";

  images.forEach(function (image) {
    htmlContent += `
    <div class="relative rounded-xl group break-inside-avoid">
              <img
                src="${image.imageUrl}"
                alt="${image.imageName}"
                class="rounded-xl w-full"
              />
              <!-- overlay on hover -->
              <a href="${image.imageUrl}" target="_blank" class="cursor-zoom-in">
                <div
                  class="absolute top-0 w-full h-full bg-black/50 rounded-xl opacity-0 group-hover:opacity-100"
                >
                  <div class="relative h-full">
                    <!-- top -->
                    <div class="absolute right-0 px-6 py-4">
                      <button
                        class="bg-red-500 right-0 px-6 py-3 rounded-full text-white font-bold cursor-pointer opacity-0 group-hover:opacity-100 duration-300 delay-200"
                      >
                        Save
                      </button>
                    </div>
                    <!-- bottom -->
                    <div
                      class="flex items-end text-white px-3 justify-between h-full py-4"
                    >
                      <button
                        class="bg-white text-black px-4 py-2 rounded-full flex items-center justify-evenly"
                      >
                        <ion-icon
                          name="log-out-outline"
                          class="pr-2"
                        ></ion-icon>
                        <p
                          class="opacity-0 group-hover:opacity-100 delay-200 duration-300"
                        >
                          Site
                        </p>
                      </button>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <button
                        class="bg-white text-black py-2 rounded-full w-10 h-10 hidden xl:block"
                      >
                        <ion-icon
                          name="share-outline"
                          class="text-3xl h-full opacity-0 group-hover:opacity-100 delay-200 duration-300"
                        ></ion-icon>
                      </button>
                      <button
                        class="bg-white text-black pt-2 rounded-full w-10 h-10"
                      >
                        <ion-icon
                          name="ellipsis-horizontal-sharp"
                          class="text-xl h-full opacity-0 group-hover:opacity-100 delay-200 duration-300"
                        ></ion-icon>
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
    `;
  });

  let insert = document.querySelector(".image-box");
  insert.innerHTML = htmlContent;
}
addImage();

/*

<!-- image-one -->
        <!-- image -->
        <div class="md:w-72 relative group break-inside-avoid">
          <img
            src="https://images.unsplash.com/photo-1591824765678-3c8f82e58630?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHJhZGhhJTIwYW5kJTIwa3Jpc2huYXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <!-- overlay -->
          <div
            class="absolute w-full h-full bottom-0 top-0 left-0 right-0 bg-black"
          >
            <!-- content container -->
            <div class="">
              <!--top content -->

              <div class="">
                <h1 class="text-white">Image name</h1>
                <p class="text-white">Image likes</p>
              </div>

              <!-- bottom content -->
              <div class="w-full h-55 bg-blue-300 mt-36">
                <p class="text-white">Image name</p>
                <p class="text-white">Image likes</p>
              </div>
            </div>
          </div>
        </div>

*/
