const List = document.querySelectorAll(".list");
const Previous = document.querySelector(".butt.prev");
const Next = document.querySelector(".butt.next");
let current = 0;

function Updation() {
    List.forEach((list, index) => {
        list.classList.remove('active', 'completed');
        if (index === current) {
            list.classList.add('active');
            list.querySelector("i").innerHTML = '✓';
        } else if (index < current) {
            list.classList.add('completed');
            list.querySelector("i").innerHTML = '✓';
        } else {
            list.querySelector("i").innerHTML = 'x';
        }
    });
    console.log(`Current Index: ${current}`);
}

Previous.addEventListener('click', () => {
    console.log('Previous Button Clicked');
    if (current > 0) {
        current--;
        Updation();
    }
});

Next.addEventListener('click', () => {
    console.log('Next Button Clicked');
    if (current <= List.length - 1) {
        current++;
        Updation();
    }
});

Updation();
