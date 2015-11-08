// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    if(this.y > 380) this.y = 380;
};

// Update the player's position, required method for game
Player.prototype.update = function(dt) {
    
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(input) {
    switch(input) {
        case 'right': 
            this.x = this.x + 80;
            break;
        case 'left': 
            this.x = this.x - 80;
            break;
        case 'up': 
            this.y = this.y - 80;
            break;
        case 'down': 
            this.y = this.y + 80;
            break;
    }
    if(this.y <= -40 ){
        console.log(this.x, this.y);
        this.reset();
    }
}

Player.prototype.collide = function() {
    all.Enemies.forEach(function(enemy) {
        if(enemy.x > (this.x - 80) && (enemy.y > (this.y - 80) || (enemy.y <= (this.y + 80))))
            reset();
    });
}

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 380;
    this.render();
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player(200, 380);
var allEnemies = [
          new Enemy(0, 60, 200),
          new Enemy(400, 140, -200),
          new Enemy(0, 220, 100),
          new Enemy(400, 300, -100)      
    ];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
