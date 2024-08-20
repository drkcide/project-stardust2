/**
 * Extend the basic Item with some very simple modifications.
 * @extends {Item}
 */
export class PjSItem extends Item {
  /**
   * Augment the basic Item data model with additional dynamic data.
   */
  prepareData() {
    // As with the actor class, items are documents that can have their data
    // preparation methods overridden (such as prepareBaseData()).
    super.prepareData();

    // Ensure the system object has the skill, total, name, and abilityKey fields
    if (!this.system.skill) {
      this.system.skill = 0; // Default value for skill
    }
    if (!this.system.total) {
      this.system.total = 0; // Default value for total
    }
    if (!this.name) {
      this.name = ''; // Default value for feature name
    }
    if (!this.system.abilityKey) {
      this.system.abilityKey = ''; // Default value for chosen ability
    }
  }

  /**
   * Prepare a data object which defines the data schema used by dice roll commands against this Item
   * @override
   */
  getRollData() {
    // Starts off by populating the roll data with a shallow copy of `this.system`
    const rollData = { ...this.system };

    // Quit early if there's no parent actor
    if (!this.actor) return rollData;

    // If present, add the actor's roll data
    rollData.actor = this.actor.getRollData();

    return rollData;
  }

  /**
   * Handle clickable rolls.
   * @param {Event} event   The originating click event
   * @private
   */
  async roll(event) {
    const item = this;

    // Initialize chat data.
    const speaker = ChatMessage.getSpeaker({ actor: this.actor });
    const rollMode = game.settings.get('core', 'rollMode');
    const label = `[${item.type}] ${item.name}`;
// Roll a d100
const roll = new Roll('1d100');
const result = await roll.evaluate(); // Evaluate the roll asynchronously

// Compare the roll result with the total
const total = this.system.total; // Get the total from the item document
const comparisonResult = result.total <= total ? "Success" : "Failure"; // Determine success or failure
const content = `<div style="text-align: center;">
            <h3 style="margin: 0;">
                ${comparisonResult === "Success" ? 
                    `<span style="color: green; font-weight: bold;">${comparisonResult}</span>` : 
                    `<span style="color: red; font-weight: bold;">${comparisonResult}</span>`}
            </h3>
            <p>${item.name} rolled a ${result.total} against a total of ${total}.</p>
        </div>`;
// Create a chat message with the roll result

    


    // If there's no roll data, send a chat message.
    if (!this.system.formula) {
      ChatMessage.create({
        speaker: speaker,
        rollMode: rollMode,
        flavor: label,
        content: content,
      });
    }
    // Otherwise, create a roll and send a chat message from it.
    else {
      // Retrieve roll data.
      const rollData = this.getRollData();

      // Invoke the roll and submit it to chat.
      const roll = new Roll(rollData.formula, rollData);
      // If you need to store the value first, uncomment the next line.
      // const result = await roll.evaluate();
      roll.toMessage({
        speaker: speaker,
        rollMode: rollMode,
        flavor: label,
        
      });
      return roll;
    }
  }
}
