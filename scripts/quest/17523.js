var status = -1;

function start(mode, type, selection) {
  qm.forceStartQuest();
  qm.dispose();
}
function end(mode, type, selection) {
  qm.warp(863000100);
  qm.forceCompleteQuest();
  qm.dispose();
}
