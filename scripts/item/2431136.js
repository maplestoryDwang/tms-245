/* 
 * 2431390 - 坐騎 與你相伴阿莉亞 永久
 */
var period = 90;
var mountSkillId = 80001224;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId);
    im.dispose();
}