let reviews = [
    {
      "name": "John Doe",
      "designation": "CEO, Tech Solutions",
      "review": "This product has significantly improved our workflow. Highly recommended!",
      "src": "./assets/pic0.jfif"
    },
    {
      "name": "Jane Smith",
      "designation": "Marketing Manager, Global Brands",
      "review": "Excellent service and easy-to-use interface. A must-have tool for businesses.",
      "src": "./assets/pic1.jfif"
    },
    {
      "name": "Michael Johnson",
      "designation": "Lead Developer, WebCorp",
      "review": "Fantastic product! It met all our expectations and more. Will definitely use it again.",
      "src": "./assets/pic2.jfif"
    },
    {
      "name": "Emily White",
      "designation": "Customer Support Lead, QuickFix",
      "review": "Great value for money. The customer support is also very responsive.",
      "src": "./assets/pic3.jfif"
    },
    {
      "name": "David Brown",
      "designation": "Operations Director, GreenTech",
      "review": "A game changer for our operations. Simple to implement and very effective.",
      "src": "./assets/pic4.jfif"
    },
    {
      "name": "Sarah Miller",
      "designation": "HR Manager, Bright Solutions",
      "review": "The tool is incredibly efficient. It has saved us so much time and effort in our daily tasks.",
      "src": "./assets/pic5.jfif"
    },
    {
      "name": "Chris Williams",
      "designation": "Product Manager, FastTrack Innovations",
      "review": "Impressive functionality and a smooth user experience. Definitely worth the investment.",
      "src": "./assets/pic6.jfif"
    },
    {
      "name": "Olivia Martinez",
      "designation": "Sales Director, Urban Technologies",
      "review": "This product exceeded our expectations. Our sales team has seen noticeable improvements in productivity.",
      "src": "./assets/pic7.jfif"
    }
  ]
  let i=0;
  
  function reviewDetails(){
    document.querySelector('h1').innerHTML = reviews[i].name;
    document.querySelector('img').src = `./assets/pic${[i]}.jfif`;
    document.querySelector('h5').innerHTML = reviews[i].designation;
    document.querySelector('p').innerHTML = reviews[i].review;
  }

  function previous(){
    
    if(i <= 0){
      i = reviews.length - 1;
      reviewDetails()
    }
    else{
      i--;
      reviewDetails()
    }
  }
  
  function next(){
    if(i == reviews.length - 1){
      i = 0;
      reviewDetails()
    }
    else{
    i++;
    reviewDetails()
    }
}