/* 
 * 2431390 - 坐騎 與你相伴幻影 永久
 */
var period = 90;
var mountSkillId = 80001223;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId);
    im.dispose();
}