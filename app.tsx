import { create_elm_component, h } from "./mod.tsx";

create_elm_component("counter-component", {
	attrs: ["count"],
	state: (props) => {
		return { count: parseInt(props.count) }
	},
	update: ({ event, state, options, dispatch }) => {
		switch (event) {
			case "double": {
				dispatch.increment()
				dispatch.increment()
				break;
			}
			case "increment":
				state.count++;
				break;
			case "decrement":
				state.count--;
				break;
			case "attribute_change": {
				if (options.name === "count") {
					state.count = parseInt(options.new);
				}
				break;
			}
		}
	},
	view: ({ state, dispatch }) => {
		return (
			<div>
				<div>The count is {state.count}</div>
				<button onClick={dispatch.increment}>Increment</button>
				<button onClick={dispatch.decrement}>Decrement</button>
				<button onClick={dispatch.double}>Double Increment</button>
			</div>
		)
	}
})

create_elm_component("app-root", {
	state: () => ({
		count: 0
	}),
	update: ({ event, state }) => {
		switch (event) {
			case "increment":
				state.count++;
				break;
		}
	},
	view: ({ dispatch, state }) => {
		return (
			<div>
				<button onClick={dispatch.increment}>Increment attr</button>
				<counter-component count={state.count}></counter-component>
			</div>
		)
	}
})