/*@author Jvlaple
 * Spawns Eak When 20 Clouds are Dropped.
 *2006000.js
 */

function act() {
    rm.mapMessage(5, "周圍突然一道閃光，好像有人出現了。");
    rm.spawnNpc(2013001);
    clear();
    var em = rm.getEventManager("OrbisPQ");
    if (em != null) {
        rm.givePartyExp(6000);
        em.setProperty("pre", "1");
    }
}
function clear() {
    rm.showEffect(true, "quest/party/clear");
    rm.playSound(true, "Party1/Clear");
}