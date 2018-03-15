var mod = (function() {

    var private1;

    var private_method = function () {

    };

    return {

        getPrivate: function() {

            return private1;

        },

        setPrivate: function(a_value) {

            private1 = a_value;

        }

    }

})();

module.exports = mod;

mod.setPrivate(2);

console.log(mod.getPrivate());

console.log(mod.private1);