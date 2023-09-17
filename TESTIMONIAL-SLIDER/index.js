const testimonials = [
    {
        name: "Faridat A",
        photoUrl: "https://chinadialogueocean.net/content/uploads/2019/05/J6A0498-1000x667.jpg",
        text: "If you want to take your business to the next level, use Greenville Microfinance Bank and don't look any further."
    },

    {
        name: "Chinyere O",
        photoUrl: "https://as1.ftcdn.net/jpg/03/11/07/20/240_F_311072076_SPdjPH8Kp7WqFd9qhetyUIZUQ1PLjOV1.jpg",
        text: "I can't say enough about Greenville Microfinance Bank. Greenville Microfinance Bank has really helped my business."
    },

    {
        name: "David C",
        photoUrl: "https://media.gettyimages.com/id/463246795/photo/black-man-working-at-outdoor-market.jpg?s=612x612&w=gi&k=20&c=tyOwC22UPax20PX1KUIt39LjynzZmolxdf3yLSTkl6U=",
        text: "I love Greenville Microfinance Bank! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come."
    },
    {
        name: "Segun O",
        photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjyV86jIDS0T8deTV6JMz23n_Lu7M8jfxDtg&usqp=CAU",
        text: "I recently applied for a loan from Greenville Microfinance Bank and I am extremely satisfied with the experience. What really impressed me was the fast response time. They answered all my questions quickly and efficiently. I highly recommend Greenville Microfinance Bank for small and medium enterprises loan."
    }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === testimonials.length) {
        idx = 0;
    }
    
    setTimeout(()=> {
        updateTestimonial() 
    }, 8000);
}