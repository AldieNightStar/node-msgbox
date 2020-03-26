const ffi = require("ffi-napi");
const ref = require("ref-napi");

const int = ref.types.int;
const uint = ref.types.uint;
const str = ref.types.CString;

const u = ffi.Library("user32.dll", {
	MessageBoxA: [int, [int, str, str, uint]]
})

function msg(title, message) {
	return u.MessageBoxA(0, title, message, 0);
}

msg("Hello!", "Hi!");

module.exports = msg;