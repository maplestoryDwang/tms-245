/* 
 * 坐騎 直升機 90天
 */
var period = 90;
var mountSkillId = 10001157;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}