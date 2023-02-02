import { Behaviour } from "@needle-tools/engine";
import { ICollider } from "@needle-tools/engine/engine/engine_types";

export class CheckTrigger extends Behaviour {
    onTriggerEnter(col: ICollider) {
        console.log("Trigger Entered");
    }
    onTriggerStay(col: ICollider) {
        console.log("Trigger Stay");
    }
    onTriggerExit(col: ICollider) {
        console.log("Trigger Exit");
    }
}
