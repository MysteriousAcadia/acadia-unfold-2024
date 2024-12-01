module ai_agent::ai_agent {
	public struct AgentTask has key {
		id: UID,
		value: u64
	}

	public fun create(ctx: &mut TxContext) {
		transfer::share_object(AgentTask {
			id: object::new(ctx),
			value: 0
		})
	}

	public fun increment(counter: &mut AgentTask) {
		counter.value = counter.value + 1;
	}

	public fun set_value(counter: &mut AgentTask, value: u64, ctx: &TxContext) {
		counter.value = value;
	}
}