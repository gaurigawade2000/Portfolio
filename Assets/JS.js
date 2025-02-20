
        function disableRightClick(event) {
            event.preventDefault()
        }
        function loadPage() {
            fetch('about.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('dynamicContent').innerHTML = data;
                })
                .catch(error => console.error('Error loading page:', error));
        }
