const MENU_DATA = [
    {
      id: 1,
      title: 'Special Offers',
      items: [
        {
          id: 1,
          name: 'T-Bone Steak & Eggs',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/3.jpg',
          category: 'A\'la Carte. American. Main Course',
          pickup: 'Free Pickup',
          timer:'4-6',
          price: 16.99
        },
        {
          id: 2,
          name: 'Eggs Benedict',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/14.jpg',
          category: 'à la carte. American. Main Course',
          pickup: 'Free Pickup',
          timer:'5-7',
          price: 13.48
        }
      ]
    },
     {
      id: 2,
      title: 'Salad',
      items: [
        {
          id: 11,
          name: 'Roasted Chicken Salad',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/ed8b6b3b-9d2b-4ff5-6a5e-08d75451a565.jpg',
          category: 'Salad. American. Appetizer',
          pickup: 'Free Pickup',
          timer:'7-10',
          price: 14.50
        },
        {
          id: 12,
          name: 'Chopped Salad',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/3b9a57ce-e633-4175-6a5d-08d75451a565.jpg',
          category: 'Salad. American. Appetizer',
          pickup: 'Free Pickup',
          timer:'5-7',
          price: 14.95
        },
        {
          id: 15,
          name: 'California Chicken Salad',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/4.jpg',
          category: 'Salad. American. Main Course',
          pickup: 'Free Pickup',
          timer:'25-37',
          price: 13.80
        },
        {
          id: 14,
          name: 'Greek Salad',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/3af24fad-c5ca-44f4-6a60-08d75451a565.jpg',
          category: 'Salad. American. Appetizer',
          pickup: 'Free Pickup',
          timer:'9-13',
          price: 12.50
        },
        {
          id: 10,
          name: 'Caesar Salad',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/b04eb862-c487-4fbd-6a61-08d75451a565.jpg',
          category: 'Salad. American. Appetizer' ,
          pickup: 'Free Pickup',
          timer:'5-7',
          price: 11.50
        },
        {
          id: 13,
          name: 'Kale Salad',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/f9c1f8bb-432b-495e-6a5f-08d75451a565.jpg',
          category: 'Salad. American. Appetizer',
          pickup: 'Free Pickup',
          timer:'5-7',
          price: 6.00
        },
      ]
    },
     {
      id: 3,
      title: 'Appetizer',
      items: [
        {
          id: 22,
          name: 'Creamy Chicken Soup',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/dc8afebc-5043-4ee6-6a68-08d75451a565.jpg',
          category: 'Salad. American. Appetizer',
          pickup: 'Free Pickup',
          timer:'10-15',
          price: 6.99
        },
        {
          id: 20,
          name: 'Chopped Salad',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/3b9a57ce-e633-4175-6a5d-08d75451a565.jpg',
          category: 'Salad. American. Appetizer',
          pickup: 'Free Pickup',
          timer:'5-7',
          price: 14.95
        },
        {
          id: 23,
          name: 'Kale Salad',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/f9c1f8bb-432b-495e-6a5f-08d75451a565.jpg',
          category: 'Salad. American. Appetizer',
          pickup: 'Free Pickup',
          timer:'5-7',
          price: 6.00
        },
        {
          id: 18,
          name: 'Caesar Salad',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/b04eb862-c487-4fbd-6a61-08d75451a565.jpg',
          category: 'Salad. American. Appetizer',
          pickup: 'Free Pickup',
          timer:'5-7',
          price: 11.50
        },
        {
          id: 21,
          name: 'Roasted Chicken Salad',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/ed8b6b3b-9d2b-4ff5-6a5e-08d75451a565.jpg',
          category: 'Salad. American. Appetizer',
          pickup: 'Free Pickup',
          timer:'7-10',
          price: 14.50
        },
        {
          id: 24,
          name: 'Greek Salad',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/3af24fad-c5ca-44f4-6a60-08d75451a565.jpg',
          category: 'Salad. American. Appetizer',
          pickup: 'Free Pickup',
          timer:'9-13',
          price: 12.50
        },
        {
          id: 19,
          name: 'Chicken Soup',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/f1d00e37-dc3f-4ac5-6a62-08d75451a565.jpg',
          category: 'Salad. American. Appetizer',
          pickup: 'Free Pickup',
          timer:'10-15',
          price: 6.99
        }
      ]
    },
     {
      id: 4,
      title: 'Main Course',
      items: [
        {
          id: 25,
          name: 'Veggie Pizza',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/7bd9e7e9-0040-4b38-6a65-08d75451a565.jpg',
          category: 'Pizza. Italian. Main Course',
          pickup: 'Free Pickup',
          timer:'30-45',
          price: 19.70
        },
        {
          id: 26,
          name: 'Pad Thai',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/2c433d2f-5d42-430a-67e9-08d687252175.jpg',
          category: 'Seafood .Thai. Main Course',
          pickup: 'Free Pickup',
          timer:'25-37',
          price: 9.99
        },
        {
          id: 27,
          name: 'Blueberry Pancake Breakfast',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/14.jpg',
          category: 'Pancake. American. Main Course',
          pickup: 'Free Pickup',
          timer:'10-15',
          price: 8.99
        },
        {
          id: 28,
          name: 'Cinnamon Roll Pancake',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/2.jpg',
          category: 'Cinnamon roll pancake. American. Main Course',
          pickup: 'Free Pickup',
          timer:'5-7',
          price: 11.45
        },
        {
          id: 29,
          name: 'Cheese Pizza',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/11.jpg',
          category: 'Pizza. Italian. Main Course',
          pickup: 'Free Pickup',
          timer:'20-30',
          price: 21.00
        },
        {
          id: 30,
          name: 'Salmon Red Caviar Sushi',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/9.jpg',
          category: 'Sushi. Japanese. Main Course',
          pickup: 'Free Pickup',
          timer:'4-6',
          price: 4.95
        },
        {
          id: 31,
          name: 'Boneless BBQ Chicken Pizza',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/7.jpg',
          category: 'Pizza. Italian. Main Course',
          pickup: 'Free Pickup',
          timer:'30-45',
          price: 14.29
        }
      ]
    },
    {
      id: 5,
      title: 'American',
      items: [
        {
          id: 32,
          name: 'Quarter Dark and Leg',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/11.jpg',
          category: 'Fastfood. American. Main Course',
          pickup: 'Free Pickup',
          timer:'40-60',
          price: 16.67
        },
        {
          id: 33,
          name: 'Cinnamon Roll Pancake',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/13.jpg',
          category: 'Cinnamon roll pancake. American. Main Course',
          pickup: 'Free Pickup',
          timer:'5-7',
          price: 11.48
        },
        {
          id: 34,
          name: 'Creamy Chicken Soup',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/dc8afebc-5043-4ee6-6a68-08d75451a565.jpg',
          category: 'SoupAmericanAppetize',
          pickup: 'Free Pickup',
          timer:'10-15',
          price: 6.99
        },
        {
          id: 35,
          name: 'Eggs Benedict',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/14.jpg',
          category: 'à la carte. American. Main Course',
          pickup: 'Free Pickup',
          timer:'5-7',
          price: 13.48
        },
        {
          id: 36,
          name: 'Greek Salad',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/3af24fad-c5ca-44f4-6a60-08d75451a565.jpg',
          category: 'Salad. American. Appetizer',
          pickup: 'Free Pickup',
          timer:'9-13',
          price: 12.50
        },
        {
          id: 37,
          name: 'My Hammy & Cheese Omelette',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/7.jpg',
          category: 'OmeletteAmericanMain Course',
          pickup: 'Free Pickup',
          timer:'15-22',
          price: 10.99
        },
        {
          id: 38,
          name: 'Avocado Bacon Cheeseburger',
          imageUrl: 'https://cdn.opeqe.com/image/menu/l/12.jpg',
          category: 'Fastfood. American. Main Course',
          pickup: 'Free Pickup',
          timer:'10-15',
          price: 7.69
        }
      ]
    }
  ];
  
  export default MENU_DATA;
  