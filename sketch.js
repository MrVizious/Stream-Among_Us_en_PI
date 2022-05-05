MAX_COLUMNS = 4;
MAX_ROWS = 4;

AMONGUS_DIGITS = "0111110011110101";
AMONGUS_INDEX = 134664;

let digits;

let counter = 134000;

function preload() {
  digits = loadStrings("binary_pi_digits.txt");
}

function setup() {
  digits = digits[0];
  createCanvas(400, 400);
}

function draw() {
  background(150);
  current_string = get_string_at_index(counter);
  draw_digits_string(current_string);
  if (current_string == AMONGUS_DIGITS) {
    noLoop();
  }
  console.log(counter);
  counter++;
}

function draw_digits_string(digits_string) {
  for (let y = 0; y < MAX_ROWS; y++) {
    for (let x = 0; x < MAX_COLUMNS; x++) {
      current_digit = digits_string[y * MAX_COLUMNS + x];
      if (current_digit == "0") {
        draw_square(x, y, color(20, 20, 230));
      }
      else if (current_digit == "1") {
        draw_square(x, y, color(230, 20, 20));
      }
    }

  }
}

function get_string_at_index(index) {
  return_string = digits.substring(index, index + (MAX_COLUMNS * MAX_ROWS));
  return return_string;
}

function draw_square(x, y, fill_color) {
  x_size = width / MAX_COLUMNS;
  y_size = height / MAX_ROWS;

  x_position = x * x_size;
  y_position = y * y_size;

  fill(fill_color);
  rect(x_position, y_position, x_size, y_size);
}

