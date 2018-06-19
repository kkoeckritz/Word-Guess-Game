var lists = {
    food: [
        "burrito",
        "lasagna",
        "pasta",
        "pizza",
        "sandwich",
        "soup"
    ],
    cars: [
        "Acura",
        "Alfa Romeo",
        "Aston Martin",
        "Bentley",
        "Bugatti",
        "BMW",
        "Chevrolet",
        "Chrysler",
        "Dodge",
        "Eagle",
        "Ferrari",
        "Fiat",
        "Fisker",
        "Ford",
        "GMC",
        "Hennessey",
        "Honda",
        "Hyundai",
        "Infinity",
        "Isuzu",
        "Jaguar",
        "Jeep",
        "Kia",
        "Koenigsegg",
        "Land Rover",
        "Lexus",
        "Lincoln",
        "Lotus",
        "Mazda",
        "McLaren",
        "Mercedes",
        "Mitsubishi",
        "Nissan",
        "Opel",
        "Pagani",
        "Peugeot",
        "Porsche",
        "Ram",
        "Renault",
        "Subaru",
        "Suzuki",
        "Toyota",
        "Vauxhall",
        "Volkswagen",
        "Volvo"
    ]
};

var game = {
    lives: 99,
    cur_word: "START",
    word_list : [
        "ERROR",
        "PROBLEM"
    ],
    newWord: function() {
        this.cur_word = word_list[Math.floor(Math.random() * word_list.length)];
    },
    initGame: function() {
        var game_diff = document.getElementById("game_diff");
        this.lives = game_diff.value;
    
        var game_mode = document.getElementById("game_mode");
        if (game_mode.value == "cars") {
            this.word_list = lists.cars;
        }
        else if (game_mode.value == "cities") {
            this.word_list = lists.cities;
        }
        else if (game_mode.value == "food") {
            this.word_list = lists.food;
        }

        this.newWord();
    },
    play_game: function() {
        this.initGame();
        split_word = [...this.cur_word];
        dash_word = [];
        guessed_letters = [];

        g_letters = document.getElementById("g_letters");
        g_guessed = document.getElementById("g_guessed");
        g_lives = document.getElementById("g_lives");

        // fill and print dash_word
        for (var i = 0; i < split_word.length; i++) {
            dash_word.push("_");
            g_letters.append("_");
        }

        // while lives
            
    }
};

