let store =
    {
        _state:
            {
                input: 0,
                input2: 0,
                operand: '',
                dot: 0
            },
        numberButtons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        fnButtons: ['.', '+', '-', '*', '/'],
        getInput() {
            return this._state.input;
        },
        setInput(number) {
            this._state.input = number;
        },
        getInput2() {
            return this._state.input2;
        },
        setInput2(number) {
            this._state.input2 = number;
        },
        getOperand(operand) {
            return this._state.operand;
        },
        setOperand(operand) {
            this._state.operand = operand;
        },

        renderCalc() {
            console.log('Нужно обновить DOM, что то изменилось')
        },
        subscriber(observer) {
            this.renderCalc = observer;
        },
        butAddNumber(button) {
            let num = button.target.innerHTML;
            let action = {name: 'ADD_NUMBER', number: num}
            this.dispatch(action);
        },
        setFnAction(button) {
            let fn = button.target.innerHTML;
            this.setOperand(fn);
            this.setInput2(this.getInput())
            this.setInput(0)
            console.log(this.getOperand());
            console.log(this.getInput());
        },
        resultAction(button) {
            let fn = button.target.innerHTML;
            if (this.getOperand(fn) !== '') {
                let x = this.getInput2();
                let y = this.getInput();
                if (this.getOperand(fn) === '+') {
                    let result = x + y;
                    this.setInput(result);
                }
                this.renderCalc();
            }
            ;
        },
        dispatch(action) {
            if (action.name === 'ADD_NUMBER') {
                if (this.getInput === 0) {
                    this.setInput(action.number)
                } else {
                    let number = (Number(this._state.input) * 10) + Number(action.number);
                    this.setInput(number);
                }
                this.renderCalc();
            } else if (action.name === 'CHANGE_NUMBER') {
                if (Number(action.number) >= 0) {
                    let number = Number(action.number);
                    this.setInput(number);
                    this.renderCalc();
                }
            }
        }


    }


export default store;