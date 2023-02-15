var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var FifteenthTitle = /** @class */ (function () {
    function FifteenthTitle() {
    }
    FifteenthTitle.prototype.run = function () {
        __classPrivateFieldGet(FifteenthTitle, _a, "m", _FifteenthTitle_get).call(FifteenthTitle);
    };
    var _a, _FifteenthTitle_URL, _FifteenthTitle_ID, _FifteenthTitle_get, _FifteenthTitle_getTitleFromJson;
    _a = FifteenthTitle, _FifteenthTitle_get = function _FifteenthTitle_get() {
        fetch(__classPrivateFieldGet(FifteenthTitle, _a, "f", _FifteenthTitle_URL))
            .then(function (res) {
            if (res.ok) {
                return res.json(); // Вопрос по заданию
            }
        })
            .then(function (resData) { return __classPrivateFieldGet(FifteenthTitle, _a, "m", _FifteenthTitle_getTitleFromJson).call(FifteenthTitle, resData); })
            .then(function (title) { return console.log(title); })["catch"](function (_b) {
            var message = _b.message;
            return console.error(message);
        });
    }, _FifteenthTitle_getTitleFromJson = function _FifteenthTitle_getTitleFromJson(resData) {
        var itemWithTitle = resData.find(function (item) { return item.id === __classPrivateFieldGet(FifteenthTitle, _a, "f", _FifteenthTitle_ID); });
        var title = itemWithTitle.title;
        return title;
    };
    _FifteenthTitle_URL = { value: 'https://jsonplaceholder.typicode.com/posts' };
    _FifteenthTitle_ID = { value: 15 };
    return FifteenthTitle;
}());
var newfifteenthTitle = new FifteenthTitle();
newfifteenthTitle.run();
