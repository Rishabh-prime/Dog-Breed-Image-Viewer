const nameofdog = document.getElementById("name");
        const search = document.getElementById("search");
        const search1 = document.getElementById("search1");
        const iamgeconatiner = document.getElementById("iamgeconatiner");

        async function getDogImages(dogname, count = 1) {
            const response = await fetch(`https://dog.ceo/api/breed/${dogname}/images/random/${count}`);
            return await response.json();
        }

        function displayImages(imageUrls) {
            iamgeconatiner.innerHTML = '';
            imageUrls.forEach(imageUrl => {
                const img = document.createElement('img');
                img.classList.add('dog-image');
                img.setAttribute('src', imageUrl);
                iamgeconatiner.appendChild(img);
            });
        }

        search.addEventListener('click', async () => {
            const value = nameofdog.value.toLowerCase().trim();
            if (!value) return;
            const result = await getDogImages(value, 1);
            displayImages(result.message);
        });

        search1.addEventListener('click', async () => {
            const value = nameofdog.value.toLowerCase().trim();
            if (!value) return;
            const result = await getDogImages(value,50); // Adjust the count as needed
            displayImages(result.message);
            console.log(result.message);
        });