(() => {
    this.name = 'arrow functioon';
    const getNameArrowFn = () => this.name;

    function getName() {
        return this.name;
    }
    const user = {
        name: 'nome do obj exec',
        getNameArrowFn,
        getName
    }

    console.log(user.getName());
    console.log(user.getNameArrowFn());
})();





