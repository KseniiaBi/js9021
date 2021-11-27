export default class Coffee  {
	constructor(name) {
		this.name = name;
	}

	brew(){
		console.log(`${this.name} is ready`);
	}
}

export const name = 'latte';