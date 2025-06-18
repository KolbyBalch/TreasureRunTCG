import { getNetlifyContext } from 'utils';

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col how-to-play">
            <h1>How to Play</h1>
            <section className="how-to-play">
                <h2>An overview</h2>
                <p>Treasure Run is played with 2-4 people, each taking turns playing items, equipment, and rooms from their hand to find treasure and escape the dungeon.</p>
            </section>
            <section className="how-to-play">
                <h2>Setup</h2>
                <p>Place the Dungeon Entrance card in the center of the playspace, equidistant from all players.</p>
                <p>Decide upon turn order by rolling a d20. The player who rolls the highest goes first, with the turn order moving clockwise from them.</p>
                <p>Each player shuffles their deck and draws 7 cards. Each player may mulligan once by reshuffling their deck and drawing 7 new cards.</p>
                <p>The player who rolled the highest then starts their turn. In a 1v1 setting, the player who goes first skips their draw phase during their first turn.</p>
            </section>
            <section className="how-to-play">
                <h2>On your turn</h2>
                <p>Each turn is broken up into 3 phases: draw, main, and end.</p>
                <h3>Draw phase:</h3>
                <p>At the beginning of your turn, you draw a card.</p>
                <h3>Main phase:</h3>
                <p>The biggest phase of your turn, during your main phase, you may play items and equipment cards from your hand.</p>
                <p>
                    By default, you may move <strong>Once</strong> during your main phase, though many cards will increase how many times you may move.
                    Any time you would move down an unexplored path (meaning blank space on the table), you must play a room card from your hand.
                    When you play a room card, each opponent, in turn order, has the opportunity to trap it. If no traps are played, or you succeed the trap roll from a played trap, you find treasure equal to the room's <strong>Explore</strong> value.
                </p>
                <h3>End phase:</h3>
                <p>Your end phase is broken up into a few steps:</p>
                <ul>
                    <li><strong>Duel</strong> - If you are in the same room as an opponent, you must Duel. To do so, both dueling players roll a d20. Whoever wins the duel steals one Treasure from the loser and moves them to a connected room.</li>
                    <li><strong>Effects</strong> - Effects that last until the end of turn or happen at the end of turn happen now.</li>
                    <li><strong>Discard</strong> - You must discard cards until you have no more than your maximum hand size in your hand. This hand size is seven by default.</li>
                </ul>
            </section>
            <section className="how-to-play">
                <h2>Traps and Reflexes</h2>
                <p>Traps and reflexes are special card types that can be played outside of your main phase.</p>
                <h3>Traps</h3>
                <p>
                    Traps may only be played after an opponent plays a room card. 
                    Traps usually have a cost associated with them, indicated by the bubbled number in the top right of the card. You must pay Treasure equal to this cost in order to play the trap.
                    They usually also list a <i>Trap roll</i> in their rules text.
                    A player who is trapped does not find any treasure in that room, unless they meet or beat the <i>Trap roll</i> on a d20 roll.
                </p>
                <h3>Reflexes</h3>
                <p>
                    Reflexes are a special kind of card that lists exactly when it is allowed to be played, and sometimes cost Treasure to do so.
                    The condition must be met in order to play the Reflex, and it may not be played at any other time.
                </p>
            </section>
            <section className="how-to-play">
                <h2>Ending the Game</h2>
                <p>At the end of your turn, if you are in the Dungeon Entrance, you may choose to Escape.</p>
                <p>The first player to Escape with 20 or more treasure wins the game.</p>
                <p>If all players escape with less than 20 treasure, the player with the most treasure wins instead.</p>
            </section>
        </div>
    );
}