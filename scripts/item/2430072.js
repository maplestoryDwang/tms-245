/* 
 * 坐騎 老虎傳說 7天
 */
var period = 7;
var mountSkillId = 80001010;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}