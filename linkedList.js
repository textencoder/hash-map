class LinkedList {
    constructor(list = []) {
        this.list = list;
    }

    resetNodes() {
        this.list.forEach(obj => {
            let currentIndex = this.list.indexOf(obj)
            if (currentIndex !== this.list.length - 1) {
                obj.nextNode = this.list[currentIndex + 1]
            }
        })
    }

    append(value) {
        this.list.push(new Node(value));
        this.resetNodes();
    }

    prepend(value) {
        this.list.unshift(new Node(value));
        this.resetNodes();
    }

    size() {
        return this.list.length;
    }

    head() {
        return this.list[0];
    }

    tail() {
        return this.list[this.list.length - 1];
    }

    at(index) {
        return this.list[index];
    }

    pop() {
        return this.list.pop();
    }

    contains(value) {
        for (const obj of Object.values(this.list)) {
            if (obj.value == value) {
                return true;
            }
        }
        return false;
    }

    find(value) {
        return this.list.indexOf(value);
    }

    insertAt(value, index) {
        this.list.splice(index, 0, new Node(value));
        this.resetNodes()
    }

    removeAt(index) {
        this.list.splice(index, 1);
        this.resetNodes();
    }

    toString() {
        let str = '';
        this.list.forEach(el => {
            if (el.nextNode !== null) {
                str += `( ${el.value} ) -> `
            } else {
                str += `( ${el.value} ) -> ${el.nextNode}`
            }
            
        });
        return str;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

module.exports = {
    LinkedList,
    Node
}