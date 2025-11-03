/*
Navicat MySQL Data Transfer

Source Server         : localhost_3308
Source Server Version : 50150
Source Host           : localhost:3308
Source Database       : playms

Target Server Type    : MYSQL
Target Server Version : 50150
File Encoding         : 65001

Date: 2019-07-17 20:34:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `accounts`
-- ----------------------------
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '',
  `password` varchar(128) NOT NULL DEFAULT '',
  `safecode` varchar(128) DEFAULT '',
  `salt` varchar(32) DEFAULT NULL,
  `2ndpassword` varchar(134) DEFAULT NULL,
  `salt2` varchar(32) DEFAULT NULL,
  `loggedin` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `lastlogin` timestamp NULL DEFAULT NULL,
  `createdat` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `birthday` date NOT NULL DEFAULT '0000-00-00',
  `banned` tinyint(1) NOT NULL DEFAULT '0',
  `banreason` text,
  `gm` tinyint(1) NOT NULL DEFAULT '0',
  `email` tinytext,
  `macs` tinytext,
  `maclist` tinytext,
  `tempban` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `greason` tinyint(4) unsigned DEFAULT NULL,
  `gender` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `SessionIP` varchar(64) DEFAULT NULL,
  `points` int(11) NOT NULL DEFAULT '0',
  `vpoints` int(11) NOT NULL DEFAULT '0',
  `totalvotes` int(11) NOT NULL DEFAULT '0',
  `lastlogon` timestamp NULL DEFAULT NULL,
  `lastvoteip` varchar(64) DEFAULT NULL,
  `lastknownip` varchar(30) DEFAULT NULL,
  `qq` varchar(30) DEFAULT NULL,
  `ACash` int(11) NOT NULL DEFAULT '0',
  `mPoints` int(11) DEFAULT NULL,
  `check` int(11) NOT NULL DEFAULT '0',
  `webadmin` int(1) unsigned NOT NULL DEFAULT '0',
  `md5pass` varchar(128) NOT NULL DEFAULT '',
  `rmb` int(11) NOT NULL DEFAULT '0',
  `ref_code` varchar(128) DEFAULT NULL,
  `up_ref_code` varchar(128) DEFAULT NULL,
  `up_id` int(11) DEFAULT NULL,
  `up_name` varchar(20) DEFAULT NULL,
  `ref_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `ranking1` (`id`,`banned`,`gm`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of accounts
-- ----------------------------

-- ----------------------------
-- Table structure for `accounts_deletechr`
-- ----------------------------
DROP TABLE IF EXISTS `accounts_deletechr`;
CREATE TABLE `accounts_deletechr` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `account_id` int(11) NOT NULL,
  `world` int(11) NOT NULL,
  `character_id` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `account_id` (`account_id`),
  KEY `character_id` (`character_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of accounts_deletechr
-- ----------------------------

-- ----------------------------
-- Table structure for `accounts_event`
-- ----------------------------
DROP TABLE IF EXISTS `accounts_event`;
CREATE TABLE `accounts_event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accId` int(11) NOT NULL DEFAULT '0',
  `eventId` varchar(20) NOT NULL DEFAULT '',
  `count` int(11) NOT NULL DEFAULT '0',
  `type` int(11) NOT NULL DEFAULT '0',
  `updateTime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `accid` (`accId`),
  KEY `eventid` (`eventId`) USING BTREE,
  CONSTRAINT `accounts_event_ibfk_1` FOREIGN KEY (`accId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of accounts_event
-- ----------------------------

-- ----------------------------
-- Table structure for `accounts_info`
-- ----------------------------
DROP TABLE IF EXISTS `accounts_info`;
CREATE TABLE `accounts_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accId` int(11) NOT NULL DEFAULT '0',
  `worldId` int(11) NOT NULL DEFAULT '0',
  `cardSlots` int(11) NOT NULL DEFAULT '3',
  `gamePoints` int(11) NOT NULL DEFAULT '0' COMMENT '在線時間點',
  `updateTime` timestamp NULL DEFAULT NULL COMMENT '時間戳',
  PRIMARY KEY (`id`),
  KEY `accid` (`accId`),
  KEY `worldid` (`worldId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of accounts_info
-- ----------------------------

-- ----------------------------
-- Table structure for `accounts_log`
-- ----------------------------
DROP TABLE IF EXISTS `accounts_log`;
CREATE TABLE `accounts_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `accid` int(11) NOT NULL,
  `accname` varchar(20) NOT NULL DEFAULT '',
  `ip` varchar(45) NOT NULL,
  `macs` tinytext,
  `logintime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `accid` (`accid`),
  CONSTRAINT `accounts_log_ibfk_1` FOREIGN KEY (`accid`) REFERENCES `accounts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of accounts_log
-- ----------------------------

-- ----------------------------
-- Table structure for `accounts_mobcollection`
-- ----------------------------
DROP TABLE IF EXISTS `accounts_mobcollection`;
CREATE TABLE `accounts_mobcollection` (
  `accounts_id` int(11) NOT NULL,
  `world` int(11) NOT NULL DEFAULT '0',
  `recordid` int(11) NOT NULL,
  `data` varchar(255) NOT NULL,
  PRIMARY KEY (`accounts_id`,`world`,`recordid`),
  KEY `accounts_id` (`accounts_id`,`world`) USING BTREE,
  CONSTRAINT `accounts_mobcollection_ibfk_1` FOREIGN KEY (`accounts_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of accounts_mobcollection
-- ----------------------------

-- ----------------------------
-- Table structure for `accounts_questinfo`
-- ----------------------------
DROP TABLE IF EXISTS `accounts_questinfo`;
CREATE TABLE `accounts_questinfo` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `accounts_id` int(11) DEFAULT NULL,
  `world` int(11) DEFAULT NULL,
  `quest` int(11) DEFAULT NULL,
  `customData` varchar(555) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `accounts_id` (`accounts_id`),
  CONSTRAINT `accounts_questinfo_ibfk_1` FOREIGN KEY (`accounts_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of accounts_questinfo
-- ----------------------------

-- ----------------------------
-- Table structure for `achievements`
-- ----------------------------
DROP TABLE IF EXISTS `achievements`;
CREATE TABLE `achievements` (
  `achievementid` int(9) NOT NULL DEFAULT '0',
  `charid` int(9) NOT NULL DEFAULT '0',
  `accountid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`achievementid`,`charid`),
  KEY `achievementid` (`achievementid`),
  KEY `accountid` (`accountid`),
  KEY `charid` (`charid`),
  CONSTRAINT `achievements_ibfk_1` FOREIGN KEY (`charid`) REFERENCES `characters` (`id`) ON DELETE CASCADE,
  CONSTRAINT `achievements_ibfk_2` FOREIGN KEY (`accountid`) REFERENCES `accounts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of achievements
-- ----------------------------

-- ----------------------------
-- Table structure for `alliances`
-- ----------------------------
DROP TABLE IF EXISTS `alliances`;
CREATE TABLE `alliances` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `world` int(10) NOT NULL DEFAULT '0',
  `name` varchar(13) NOT NULL,
  `leaderid` int(11) NOT NULL,
  `guild1` int(11) NOT NULL,
  `guild2` int(11) NOT NULL,
  `guild3` int(11) NOT NULL DEFAULT '0',
  `guild4` int(11) NOT NULL DEFAULT '0',
  `guild5` int(11) NOT NULL DEFAULT '0',
  `rank1` varchar(13) NOT NULL DEFAULT '公會長',
  `rank2` varchar(13) NOT NULL DEFAULT '公會副會長',
  `rank3` varchar(13) NOT NULL DEFAULT '聯盟員1',
  `rank4` varchar(13) NOT NULL DEFAULT '聯盟員2',
  `rank5` varchar(13) NOT NULL DEFAULT '聯盟員3',
  `capacity` int(11) NOT NULL DEFAULT '2',
  `notice` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `id` (`id`),
  KEY `leaderid` (`leaderid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of alliances
-- ----------------------------

-- ----------------------------
-- Table structure for `androids`
-- ----------------------------
DROP TABLE IF EXISTS `androids`;
CREATE TABLE `androids` (
  `uniqueid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(13) NOT NULL DEFAULT '機器人',
  `type` int(11) NOT NULL DEFAULT '-1',
  `gender` int(11) NOT NULL DEFAULT '0',
  `skin` int(11) NOT NULL DEFAULT '0',
  `hair` int(11) NOT NULL DEFAULT '0',
  `face` int(11) NOT NULL DEFAULT '0',
  `antennaUsed` tinyint(1) NOT NULL DEFAULT '0',
  `shopTime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`uniqueid`),
  KEY `uniqueid` (`uniqueid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of androids
-- ----------------------------

-- ----------------------------
-- Table structure for `auction`
-- ----------------------------
DROP TABLE IF EXISTS `auction`;
CREATE TABLE `auction` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `world` int(255) NOT NULL DEFAULT '0',
  `accounts_id` int(11) NOT NULL,
  `characters_id` int(11) NOT NULL,
  `owner` varchar(15) NOT NULL,
  `other_id` int(11) NOT NULL,
  `other` varchar(15) NOT NULL,
  `itemid` int(11) NOT NULL,
  `number` int(11) NOT NULL,
  `type` int(11) NOT NULL DEFAULT '0',
  `price` bigint(20) NOT NULL DEFAULT '0',
  `state` int(11) NOT NULL,
  `startdate` bigint(20) NOT NULL,
  `expiredate` bigint(20) NOT NULL DEFAULT '0',
  `donedate` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`,`world`) USING BTREE,
  KEY `world` (`world`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of auction
-- ----------------------------

-- ----------------------------
-- Table structure for `auth_server_channel_ip`
-- ----------------------------
DROP TABLE IF EXISTS `auth_server_channel_ip`;
CREATE TABLE `auth_server_channel_ip` (
  `channelconfigid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `channelid` int(10) unsigned NOT NULL DEFAULT '0',
  `name` tinytext NOT NULL,
  `value` tinytext NOT NULL,
  PRIMARY KEY (`channelconfigid`),
  KEY `channelid` (`channelid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of auth_server_channel_ip
-- ----------------------------

-- ----------------------------
-- Table structure for `bank`
-- ----------------------------
DROP TABLE IF EXISTS `bank`;
CREATE TABLE `bank` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charid` int(11) NOT NULL,
  `money` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `charid` (`charid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bank
-- ----------------------------

-- ----------------------------
-- Table structure for `battlelog`
-- ----------------------------
DROP TABLE IF EXISTS `battlelog`;
CREATE TABLE `battlelog` (
  `battlelogid` int(11) NOT NULL AUTO_INCREMENT,
  `accid` int(11) NOT NULL DEFAULT '0',
  `accid_to` int(11) NOT NULL DEFAULT '0',
  `when` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`battlelogid`),
  KEY `accid` (`accid`),
  CONSTRAINT `battlelog_ibfk_1` FOREIGN KEY (`accid`) REFERENCES `accounts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of battlelog
-- ----------------------------

-- ----------------------------
-- Table structure for `bbs_replies`
-- ----------------------------
DROP TABLE IF EXISTS `bbs_replies`;
CREATE TABLE `bbs_replies` (
  `replyid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `threadid` int(10) unsigned NOT NULL,
  `postercid` int(10) unsigned NOT NULL,
  `timestamp` bigint(20) unsigned NOT NULL,
  `content` varchar(26) NOT NULL DEFAULT '',
  `guildid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`replyid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of bbs_replies
-- ----------------------------

-- ----------------------------
-- Table structure for `bbs_threads`
-- ----------------------------
DROP TABLE IF EXISTS `bbs_threads`;
CREATE TABLE `bbs_threads` (
  `threadid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `postercid` int(10) unsigned NOT NULL,
  `name` varchar(26) NOT NULL DEFAULT '',
  `timestamp` bigint(20) unsigned NOT NULL,
  `icon` smallint(5) unsigned NOT NULL,
  `startpost` text NOT NULL,
  `guildid` int(10) unsigned NOT NULL,
  `localthreadid` int(10) unsigned NOT NULL,
  PRIMARY KEY (`threadid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of bbs_threads
-- ----------------------------

-- ----------------------------
-- Table structure for `bosslog`
-- ----------------------------
DROP TABLE IF EXISTS `bosslog`;
CREATE TABLE `bosslog` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `accountid` int(10) DEFAULT NULL,
  `characterid` int(10) unsigned NOT NULL,
  `bossid` varchar(20) NOT NULL,
  `count` int(10) NOT NULL DEFAULT '0',
  `type` int(10) NOT NULL DEFAULT '0',
  `time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `characterid` (`characterid`) USING BTREE,
  KEY `bossid` (`bossid`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for `buddies`
-- ----------------------------
DROP TABLE IF EXISTS `buddies`;
CREATE TABLE `buddies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL,
  `buddyid` int(11) NOT NULL,
  `pending` tinyint(4) NOT NULL DEFAULT '0',
  `groupname` varchar(16) NOT NULL DEFAULT '群組未指定',
  PRIMARY KEY (`id`),
  KEY `buddies_ibfk_1` (`characterid`),
  KEY `buddyid` (`buddyid`),
  KEY `id` (`id`),
  CONSTRAINT `buddies_ibfk_1` FOREIGN KEY (`characterid`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of buddies
-- ----------------------------

-- ----------------------------
-- Table structure for `cashshop_categories`
-- ----------------------------
DROP TABLE IF EXISTS `cashshop_categories`;
CREATE TABLE `cashshop_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `parent` int(11) NOT NULL,
  `flag` int(11) NOT NULL,
  `sold` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of cashshop_categories
-- ----------------------------

-- ----------------------------
-- Table structure for `cashshop_items`
-- ----------------------------
DROP TABLE IF EXISTS `cashshop_items`;
CREATE TABLE `cashshop_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` int(11) NOT NULL,
  `subcategory` int(11) NOT NULL,
  `parent` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `sn` int(11) NOT NULL,
  `itemid` int(11) NOT NULL,
  `flag` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `discountPrice` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `expire` int(11) NOT NULL,
  `gender` tinyint(1) NOT NULL DEFAULT '2',
  `likes` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of cashshop_items
-- ----------------------------

-- ----------------------------
-- Table structure for `cashshop_limit_sell`
-- ----------------------------
DROP TABLE IF EXISTS `cashshop_limit_sell`;
CREATE TABLE `cashshop_limit_sell` (
  `serial` int(11) NOT NULL,
  `amount` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`serial`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cashshop_limit_sell
-- ----------------------------

-- ----------------------------
-- Table structure for `cashshop_log`
-- ----------------------------
DROP TABLE IF EXISTS `cashshop_log`;
CREATE TABLE `cashshop_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accId` int(11) NOT NULL DEFAULT '0' COMMENT '購買者的帳號ID',
  `chrId` int(11) NOT NULL DEFAULT '0' COMMENT '購買者的角色ID',
  `name` varchar(13) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '購買者的名字',
  `SN` int(11) NOT NULL DEFAULT '0' COMMENT '商城道具的SNid',
  `itemId` int(11) NOT NULL DEFAULT '0' COMMENT '商城道具的物品ID',
  `type` int(11) NOT NULL DEFAULT '1' COMMENT '消費的類型 1=樂豆點 2=楓點',
  `price` int(11) NOT NULL DEFAULT '0' COMMENT '商城道具的價格',
  `mileage` int(11) NOT NULL DEFAULT '0',
  `count` int(11) NOT NULL DEFAULT '0' COMMENT '購買商城道具的數量',
  `cash` int(11) NOT NULL DEFAULT '0' COMMENT '角色剩餘樂豆點數量',
  `points` int(11) NOT NULL DEFAULT '0' COMMENT '角色剩餘楓點數量',
  `itemlog` text NOT NULL COMMENT '商城購買道具的操作日誌',
  `Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '購買商城道具的時間',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cashshop_log
-- ----------------------------

-- ----------------------------
-- Table structure for `cashshop_menuitems`
-- ----------------------------
DROP TABLE IF EXISTS `cashshop_menuitems`;
CREATE TABLE `cashshop_menuitems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` int(11) NOT NULL,
  `subcategory` int(11) NOT NULL,
  `parent` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `sn` int(11) NOT NULL,
  `itemid` int(11) NOT NULL,
  `flag` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `discountPrice` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `expire` int(11) NOT NULL,
  `gender` tinyint(1) NOT NULL DEFAULT '2',
  `likes` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of cashshop_menuitems
-- ----------------------------

-- ----------------------------
-- Table structure for `cashshop_modified_items`
-- ----------------------------
DROP TABLE IF EXISTS `cashshop_modified_items`;
CREATE TABLE `cashshop_modified_items` (
                                           `serial` int(11) NOT NULL,
                                           `discount_price` int(11) NOT NULL DEFAULT '-1',
                                           `mark` tinyint(1) NOT NULL DEFAULT '-1',
                                           `showup` tinyint(1) NOT NULL DEFAULT '-1',
                                           `itemid` int(11) NOT NULL DEFAULT '0',
                                           `priority` tinyint(3) NOT NULL DEFAULT '0',
                                           `package` tinyint(1) NOT NULL DEFAULT '0',
                                           `period` tinyint(3) NOT NULL DEFAULT '0',
                                           `gender` tinyint(1) NOT NULL DEFAULT '0',
                                           `count` tinyint(3) NOT NULL DEFAULT '0',
                                           `meso` int(11) NOT NULL DEFAULT '0',
                                           `csClass` tinyint(1) NOT NULL DEFAULT '0',
                                           `termStart` int(11) NOT NULL DEFAULT '0',
                                           `termEnd` int(11) NOT NULL DEFAULT '0',
                                           `fameLimit` smallint(6) NOT NULL DEFAULT '0',
                                           `levelLimit` smallint(6) NOT NULL DEFAULT '0',
                                           `categories` tinyint(3) NOT NULL DEFAULT '0',
                                           `bast_new` tinyint(1) NOT NULL DEFAULT '0',
                                           `extra_flags` tinyint(1) NOT NULL DEFAULT '0',
                                           PRIMARY KEY (`serial`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for `cashshop_randombox`
-- ----------------------------
DROP TABLE IF EXISTS `cashshop_randombox`;
CREATE TABLE `cashshop_randombox` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `randboxID` int(11) NOT NULL,
  `itemSN` int(11) NOT NULL,
  `count` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `randboxID` (`randboxID`),
  KEY `itemSN` (`itemSN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cashshop_randombox
-- ----------------------------
INSERT INTO `cashshop_randombox` VALUES ('1', '5222036', '130000324', '1');
INSERT INTO `cashshop_randombox` VALUES ('5', '5222036', '130000325', '1');
INSERT INTO `cashshop_randombox` VALUES ('6', '5222036', '130000326', '1');
INSERT INTO `cashshop_randombox` VALUES ('16', '5533071', '140101033', '1');
INSERT INTO `cashshop_randombox` VALUES ('17', '5533071', '140101032', '1');
INSERT INTO `cashshop_randombox` VALUES ('18', '5533071', '140101035', '1');
INSERT INTO `cashshop_randombox` VALUES ('19', '5533071', '140101034', '1');
INSERT INTO `cashshop_randombox` VALUES ('20', '5533071', '140101036', '1');
INSERT INTO `cashshop_randombox` VALUES ('21', '5533067', '130000625', '1');
INSERT INTO `cashshop_randombox` VALUES ('22', '5533067', '130000626', '1');
INSERT INTO `cashshop_randombox` VALUES ('23', '5533067', '130000627', '1');
INSERT INTO `cashshop_randombox` VALUES ('24', '5533067', '130000628', '1');
INSERT INTO `cashshop_randombox` VALUES ('25', '5533067', '130000629', '1');
INSERT INTO `cashshop_randombox` VALUES ('26', '5533067', '130000630', '1');
INSERT INTO `cashshop_randombox` VALUES ('27', '5533033', '140100777', '1');
INSERT INTO `cashshop_randombox` VALUES ('28', '5533033', '140100776', '1');
INSERT INTO `cashshop_randombox` VALUES ('29', '5533033', '140100775', '1');
INSERT INTO `cashshop_randombox` VALUES ('30', '5533033', '140100764', '1');
INSERT INTO `cashshop_randombox` VALUES ('31', '5533033', '140100765', '1');
INSERT INTO `cashshop_randombox` VALUES ('32', '5533033', '140100766', '1');
INSERT INTO `cashshop_randombox` VALUES ('33', '5533033', '140100767', '1');
INSERT INTO `cashshop_randombox` VALUES ('34', '5533033', '140100768', '1');
INSERT INTO `cashshop_randombox` VALUES ('35', '5533033', '140100769', '1');
INSERT INTO `cashshop_randombox` VALUES ('36', '5533033', '140100770', '1');
INSERT INTO `cashshop_randombox` VALUES ('37', '5533033', '140100771', '1');
INSERT INTO `cashshop_randombox` VALUES ('38', '5533033', '140100772', '1');
INSERT INTO `cashshop_randombox` VALUES ('39', '5533033', '140100773', '1');
INSERT INTO `cashshop_randombox` VALUES ('40', '5533033', '140100774', '1');
INSERT INTO `cashshop_randombox` VALUES ('41', '5533025', '130000391', '1');
INSERT INTO `cashshop_randombox` VALUES ('42', '5533025', '130000499', '1');
INSERT INTO `cashshop_randombox` VALUES ('43', '5533025', '130000498', '1');
INSERT INTO `cashshop_randombox` VALUES ('44', '5533025', '130000500', '1');
INSERT INTO `cashshop_randombox` VALUES ('45', '5533025', '130000390', '1');
INSERT INTO `cashshop_randombox` VALUES ('46', '5533025', '130000565', '1');
INSERT INTO `cashshop_randombox` VALUES ('47', '5533025', '130000539', '1');
INSERT INTO `cashshop_randombox` VALUES ('48', '5533007', '140200173', '1');
INSERT INTO `cashshop_randombox` VALUES ('49', '5533007', '140200301', '1');
INSERT INTO `cashshop_randombox` VALUES ('50', '5533007', '140200302', '1');
INSERT INTO `cashshop_randombox` VALUES ('51', '5533007', '140200224', '1');
INSERT INTO `cashshop_randombox` VALUES ('52', '5533007', '140200184', '1');
INSERT INTO `cashshop_randombox` VALUES ('53', '5533007', '140200183', '1');
INSERT INTO `cashshop_randombox` VALUES ('54', '5533007', '140200258', '1');
INSERT INTO `cashshop_randombox` VALUES ('55', '5533007', '140200198', '1');
INSERT INTO `cashshop_randombox` VALUES ('56', '5533007', '140200243', '1');
INSERT INTO `cashshop_randombox` VALUES ('57', '5533007', '140200241', '1');
INSERT INTO `cashshop_randombox` VALUES ('58', '5533007', '140200218', '1');
INSERT INTO `cashshop_randombox` VALUES ('59', '5533040', '160000189', '1');
INSERT INTO `cashshop_randombox` VALUES ('60', '5533040', '160000188', '1');
INSERT INTO `cashshop_randombox` VALUES ('61', '5533040', '160000191', '1');
INSERT INTO `cashshop_randombox` VALUES ('62', '5533040', '160000190', '1');
INSERT INTO `cashshop_randombox` VALUES ('63', '5533040', '160000193', '1');
INSERT INTO `cashshop_randombox` VALUES ('64', '5533040', '160000192', '1');
INSERT INTO `cashshop_randombox` VALUES ('65', '5533040', '160000195', '1');
INSERT INTO `cashshop_randombox` VALUES ('66', '5533040', '160000194', '1');
INSERT INTO `cashshop_randombox` VALUES ('67', '5533040', '160000196', '1');
INSERT INTO `cashshop_randombox` VALUES ('68', '5222036', '140600236', '1');
INSERT INTO `cashshop_randombox` VALUES ('69', '5222036', '140300392', '1');
INSERT INTO `cashshop_randombox` VALUES ('71', '5222036', '140100615', '1');
INSERT INTO `cashshop_randombox` VALUES ('72', '5222036', '140200172', '1');
INSERT INTO `cashshop_randombox` VALUES ('73', '5222036', '140100601', '1');
INSERT INTO `cashshop_randombox` VALUES ('74', '5222036', '140300376', '1');
INSERT INTO `cashshop_randombox` VALUES ('75', '5222036', '140200170', '1');
INSERT INTO `cashshop_randombox` VALUES ('76', '5222036', '140600227', '1');
INSERT INTO `cashshop_randombox` VALUES ('77', '5222036', '140200187', '1');
INSERT INTO `cashshop_randombox` VALUES ('78', '5222036', '140100654', '1');
INSERT INTO `cashshop_randombox` VALUES ('79', '5222036', '140300416', '1');
INSERT INTO `cashshop_randombox` VALUES ('80', '5222036', '140600249', '1');
INSERT INTO `cashshop_randombox` VALUES ('81', '5222036', '140200188', '1');
INSERT INTO `cashshop_randombox` VALUES ('82', '5222036', '140100656', '1');
INSERT INTO `cashshop_randombox` VALUES ('83', '5222036', '140400251', '1');
INSERT INTO `cashshop_randombox` VALUES ('84', '5222036', '140500172', '1');
INSERT INTO `cashshop_randombox` VALUES ('85', '5222036', '140000317', '1');
INSERT INTO `cashshop_randombox` VALUES ('86', '5222036', '140200191', '1');
INSERT INTO `cashshop_randombox` VALUES ('87', '5222036', '140100676', '1');
INSERT INTO `cashshop_randombox` VALUES ('88', '5222036', '140400253', '1');
INSERT INTO `cashshop_randombox` VALUES ('89', '5222036', '140500173', '1');
INSERT INTO `cashshop_randombox` VALUES ('90', '5222036', '140000325', '1');
INSERT INTO `cashshop_randombox` VALUES ('91', '5222036', '140100692', '1');
INSERT INTO `cashshop_randombox` VALUES ('92', '5222036', '140100691', '1');
INSERT INTO `cashshop_randombox` VALUES ('93', '5222036', '140300436', '1');
INSERT INTO `cashshop_randombox` VALUES ('94', '5222036', '140300437', '1');
INSERT INTO `cashshop_randombox` VALUES ('95', '5222036', '140700072', '1');
INSERT INTO `cashshop_randombox` VALUES ('96', '5222036', '140600261', '1');
INSERT INTO `cashshop_randombox` VALUES ('97', '5222036', '140600260', '1');
INSERT INTO `cashshop_randombox` VALUES ('98', '5222036', '140100712', '1');
INSERT INTO `cashshop_randombox` VALUES ('99', '5222036', '140400212', '1');
INSERT INTO `cashshop_randombox` VALUES ('100', '5222036', '140400262', '1');
INSERT INTO `cashshop_randombox` VALUES ('101', '5222036', '140500180', '1');
INSERT INTO `cashshop_randombox` VALUES ('102', '5222036', '140500179', '1');
INSERT INTO `cashshop_randombox` VALUES ('103', '5222036', '140700080', '1');
INSERT INTO `cashshop_randombox` VALUES ('104', '5222036', '140600269', '1');
INSERT INTO `cashshop_randombox` VALUES ('105', '5222036', '140000337', '1');
INSERT INTO `cashshop_randombox` VALUES ('106', '5222036', '140100719', '1');
INSERT INTO `cashshop_randombox` VALUES ('107', '5222036', '140600276', '1');
INSERT INTO `cashshop_randombox` VALUES ('108', '5222036', '140400263', '1');
INSERT INTO `cashshop_randombox` VALUES ('109', '5222036', '140000340', '1');
INSERT INTO `cashshop_randombox` VALUES ('110', '5222036', '140100718', '1');
INSERT INTO `cashshop_randombox` VALUES ('111', '5222036', '140000339', '1');
INSERT INTO `cashshop_randombox` VALUES ('112', '5222036', '140300446', '1');
INSERT INTO `cashshop_randombox` VALUES ('113', '5222036', '140200205', '1');
INSERT INTO `cashshop_randombox` VALUES ('114', '5222036', '140100854', '1');
INSERT INTO `cashshop_randombox` VALUES ('115', '5222036', '140300545', '1');
INSERT INTO `cashshop_randombox` VALUES ('116', '5222036', '140300544', '1');
INSERT INTO `cashshop_randombox` VALUES ('117', '5222036', '140200260', '1');
INSERT INTO `cashshop_randombox` VALUES ('118', '5222036', '140600341', '1');
INSERT INTO `cashshop_randombox` VALUES ('119', '5222036', '140000447', '1');
INSERT INTO `cashshop_randombox` VALUES ('120', '5222036', '140200259', '1');
INSERT INTO `cashshop_randombox` VALUES ('121', '5222036', '140100752', '1');
INSERT INTO `cashshop_randombox` VALUES ('122', '5222036', '140300539', '1');
INSERT INTO `cashshop_randombox` VALUES ('123', '5222036', '140300534', '1');
INSERT INTO `cashshop_randombox` VALUES ('124', '5222036', '140600340', '1');
INSERT INTO `cashshop_randombox` VALUES ('125', '5222036', '140000446', '1');
INSERT INTO `cashshop_randombox` VALUES ('126', '5222036', '140200261', '1');
INSERT INTO `cashshop_randombox` VALUES ('127', '5222036', '140300540', '1');
INSERT INTO `cashshop_randombox` VALUES ('128', '5222036', '140300535', '1');
INSERT INTO `cashshop_randombox` VALUES ('129', '5222036', '140600343', '1');
INSERT INTO `cashshop_randombox` VALUES ('130', '5222036', '140000448', '1');
INSERT INTO `cashshop_randombox` VALUES ('131', '5222036', '140100856', '1');
INSERT INTO `cashshop_randombox` VALUES ('132', '5222036', '140300542', '1');
INSERT INTO `cashshop_randombox` VALUES ('133', '5222036', '140300537', '1');
INSERT INTO `cashshop_randombox` VALUES ('134', '5222036', '140600344', '1');
INSERT INTO `cashshop_randombox` VALUES ('135', '5222036', '140700098', '1');
INSERT INTO `cashshop_randombox` VALUES ('136', '5222036', '140000450', '1');
INSERT INTO `cashshop_randombox` VALUES ('137', '5222036', '140100865', '1');
INSERT INTO `cashshop_randombox` VALUES ('138', '5222036', '140400302', '1');
INSERT INTO `cashshop_randombox` VALUES ('139', '5222036', '140500208', '1');
INSERT INTO `cashshop_randombox` VALUES ('140', '5222036', '140600347', '1');
INSERT INTO `cashshop_randombox` VALUES ('141', '5222036', '140200264', '1');
INSERT INTO `cashshop_randombox` VALUES ('142', '5222036', '140100897', '1');
INSERT INTO `cashshop_randombox` VALUES ('143', '5222036', '140200278', '1');
INSERT INTO `cashshop_randombox` VALUES ('144', '5222036', '140300553', '1');
INSERT INTO `cashshop_randombox` VALUES ('145', '5222036', '140300554', '1');
INSERT INTO `cashshop_randombox` VALUES ('146', '5222036', '140600355', '1');
INSERT INTO `cashshop_randombox` VALUES ('147', '5222036', '140600356', '1');
INSERT INTO `cashshop_randombox` VALUES ('148', '5222036', '130500016', '1');
INSERT INTO `cashshop_randombox` VALUES ('149', '5222036', '140400330', '1');
INSERT INTO `cashshop_randombox` VALUES ('151', '5222036', '130400009', '1');
INSERT INTO `cashshop_randombox` VALUES ('152', '5222036', '130400003', '1');
INSERT INTO `cashshop_randombox` VALUES ('153', '5222036', '130100063', '1');
INSERT INTO `cashshop_randombox` VALUES ('154', '5222036', '130100010', '1');
INSERT INTO `cashshop_randombox` VALUES ('155', '5222036', '130000226', '1');
INSERT INTO `cashshop_randombox` VALUES ('156', '5222036', '130200081', '1');
INSERT INTO `cashshop_randombox` VALUES ('158', '5222036', '130200123', '1');
INSERT INTO `cashshop_randombox` VALUES ('159', '5222036', '130200120', '1');
INSERT INTO `cashshop_randombox` VALUES ('160', '5222036', '130200118', '1');
INSERT INTO `cashshop_randombox` VALUES ('161', '5222036', '110000242', '1');
INSERT INTO `cashshop_randombox` VALUES ('162', '5222036', '150000005', '1');
INSERT INTO `cashshop_randombox` VALUES ('163', '5222036', '150000006', '1');
INSERT INTO `cashshop_randombox` VALUES ('164', '5222036', '150000008', '1');
INSERT INTO `cashshop_randombox` VALUES ('165', '5222036', '130200103', '1');
INSERT INTO `cashshop_randombox` VALUES ('177', '5533077', '130000576', '1');
INSERT INTO `cashshop_randombox` VALUES ('178', '5533077', '160300016', '1');
INSERT INTO `cashshop_randombox` VALUES ('180', '5533077', '130200115', '3');
INSERT INTO `cashshop_randombox` VALUES ('181', '5533077', '130000680', '1');
INSERT INTO `cashshop_randombox` VALUES ('182', '5533077', '130200124', '1');
INSERT INTO `cashshop_randombox` VALUES ('183', '5533077', '120100025', '1');
INSERT INTO `cashshop_randombox` VALUES ('184', '5533077', '140200343', '1');
INSERT INTO `cashshop_randombox` VALUES ('185', '5533077', '110000419', '1');
INSERT INTO `cashshop_randombox` VALUES ('186', '5533077', '110000421', '1');
INSERT INTO `cashshop_randombox` VALUES ('187', '5533077', '140800323', '1');
INSERT INTO `cashshop_randombox` VALUES ('188', '5533077', '130000681', '1');
INSERT INTO `cashshop_randombox` VALUES ('189', '5533077', '130000374', '1');

-- ----------------------------
-- Table structure for `cashtradesystem`
-- ----------------------------
DROP TABLE IF EXISTS `cashtradesystem`;
CREATE TABLE `cashtradesystem` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `cid` int(20) NOT NULL,
  `itemid` int(11) NOT NULL,
  `itemQuantity` int(11) NOT NULL DEFAULT '1',
  `itemtype` int(11) NOT NULL,
  `itemPrice` bigint(20) NOT NULL DEFAULT '0',
  `upgradeslots` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `level` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `str` int(6) NOT NULL DEFAULT '0',
  `dex` int(6) NOT NULL DEFAULT '0',
  `ints` int(6) NOT NULL DEFAULT '0',
  `luk` int(6) NOT NULL DEFAULT '0',
  `hp` smallint(6) NOT NULL DEFAULT '0',
  `mp` smallint(6) NOT NULL DEFAULT '0',
  `watk` smallint(6) NOT NULL DEFAULT '0',
  `matk` smallint(6) NOT NULL DEFAULT '0',
  `wdef` smallint(6) NOT NULL DEFAULT '0',
  `mdef` smallint(6) NOT NULL DEFAULT '0',
  `acc` smallint(6) NOT NULL DEFAULT '0',
  `avoid` smallint(6) NOT NULL DEFAULT '0',
  `hands` smallint(6) NOT NULL DEFAULT '0',
  `speed` smallint(6) NOT NULL DEFAULT '0',
  `jump` smallint(6) NOT NULL DEFAULT '0',
  `ViciousHammer` tinyint(2) NOT NULL DEFAULT '0',
  `PlatinumHammer` tinyint(2) NOT NULL DEFAULT '0',
  `itemEXP` int(11) NOT NULL DEFAULT '0',
  `durability` mediumint(9) NOT NULL DEFAULT '-1',
  `enhance` tinyint(3) NOT NULL DEFAULT '0',
  `potential1` int(11) NOT NULL DEFAULT '0',
  `potential2` int(11) NOT NULL DEFAULT '0',
  `potential3` int(11) NOT NULL DEFAULT '0',
  `potential4` int(11) NOT NULL DEFAULT '0',
  `potential5` int(11) NOT NULL DEFAULT '0',
  `potential6` int(11) NOT NULL DEFAULT '0',
  `limitBreak` int(11) NOT NULL DEFAULT '0',
  `enhanctBuff` int(6) NOT NULL DEFAULT '0',
  `reqLevel` int(3) NOT NULL DEFAULT '0',
  `yggdrasilWisdom` int(3) NOT NULL DEFAULT '0',
  `finalStrike` int(3) NOT NULL DEFAULT '0',
  `bossDamage` int(3) NOT NULL DEFAULT '0',
  `ignorePDR` int(3) NOT NULL DEFAULT '0',
  `totalDamage` int(3) NOT NULL DEFAULT '0',
  `allStat` int(3) NOT NULL DEFAULT '0',
  `karmaCount` double(3,0) NOT NULL DEFAULT '-1',
  `sealedlevel` tinyint(1) NOT NULL DEFAULT '0',
  `sealedExp` bigint(20) NOT NULL DEFAULT '0',
  `tradeType` int(11) NOT NULL DEFAULT '0',
  `remark` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Owner` tinytext CHARACTER SET utf8,
  `expiredate` bigint(20) NOT NULL DEFAULT '-1',
  `itemSlot1` int(11) DEFAULT '-1',
  `itemSlot2` int(11) DEFAULT '-1',
  `itemSlot3` int(11) DEFAULT '-1',
  `soul` int(3) DEFAULT '0',
  `soulflag` tinyint(1) DEFAULT '0',
  `submittime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `soulname` int(3) NOT NULL DEFAULT '0',
  `soulenchanter` tinyint(1) NOT NULL DEFAULT '0',
  `soulpotential` int(11) NOT NULL DEFAULT '0',
  `soulskill` int(11) NOT NULL DEFAULT '0',
  `gm_log` varchar(255) DEFAULT NULL,
  `flag` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `cid` (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cashtradesystem
-- ----------------------------

-- ----------------------------
-- Table structure for `cashtradesystemlog`
-- ----------------------------
DROP TABLE IF EXISTS `cashtradesystemlog`;
CREATE TABLE `cashtradesystemlog` (
  `tid` int(11) NOT NULL,
  `cid` int(11) DEFAULT '0',
  `boughtByCid` int(11) NOT NULL DEFAULT '0',
  `boughtByCName` varchar(15) CHARACTER SET utf8 NOT NULL DEFAULT '0',
  `boughtTradeType` int(2) NOT NULL DEFAULT '0',
  `boughtPrice` int(11) NOT NULL DEFAULT '0',
  `boughtItemid` int(11) NOT NULL DEFAULT '0',
  `boughtDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `cid` (`cid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of cashtradesystemlog
-- ----------------------------

-- ----------------------------
-- Table structure for `cashtradesystemstore`
-- ----------------------------
DROP TABLE IF EXISTS `cashtradesystemstore`;
CREATE TABLE `cashtradesystemstore` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `cid` int(20) NOT NULL,
  `itemid` int(11) NOT NULL,
  `itemQuantity` int(11) NOT NULL DEFAULT '1',
  `itemtype` int(11) NOT NULL,
  `itemPrice` bigint(20) NOT NULL DEFAULT '0',
  `upgradeslots` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `level` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `str` int(6) NOT NULL DEFAULT '0',
  `dex` int(6) NOT NULL DEFAULT '0',
  `ints` int(6) NOT NULL DEFAULT '0',
  `luk` int(6) NOT NULL DEFAULT '0',
  `hp` smallint(6) NOT NULL DEFAULT '0',
  `mp` smallint(6) NOT NULL DEFAULT '0',
  `watk` smallint(6) NOT NULL DEFAULT '0',
  `matk` smallint(6) NOT NULL DEFAULT '0',
  `wdef` smallint(6) NOT NULL DEFAULT '0',
  `mdef` smallint(6) NOT NULL DEFAULT '0',
  `acc` smallint(6) NOT NULL DEFAULT '0',
  `avoid` smallint(6) NOT NULL DEFAULT '0',
  `hands` smallint(6) NOT NULL DEFAULT '0',
  `speed` smallint(6) NOT NULL DEFAULT '0',
  `jump` smallint(6) NOT NULL DEFAULT '0',
  `ViciousHammer` tinyint(2) NOT NULL DEFAULT '0',
  `itemEXP` int(11) NOT NULL DEFAULT '0',
  `durability` mediumint(9) NOT NULL DEFAULT '-1',
  `enhance` tinyint(3) NOT NULL DEFAULT '0',
  `potential1` int(11) NOT NULL DEFAULT '0',
  `potential2` int(11) NOT NULL DEFAULT '0',
  `potential3` int(11) NOT NULL DEFAULT '0',
  `potential4` int(11) NOT NULL DEFAULT '0',
  `potential5` int(11) NOT NULL DEFAULT '0',
  `potential6` int(11) NOT NULL DEFAULT '0',
  `limitBreak` int(11) NOT NULL DEFAULT '0',
  `enhanctBuff` int(6) NOT NULL DEFAULT '0',
  `reqLevel` int(3) NOT NULL DEFAULT '0' COMMENT '����װ���ĵȼ�Ҫ�����',
  `yggdrasilWisdom` int(3) NOT NULL DEFAULT '0',
  `finalStrike` int(3) NOT NULL DEFAULT '0' COMMENT '����һ������ɹ�',
  `bossDamage` int(3) NOT NULL DEFAULT '0' COMMENT 'BOSS�˺��ٷֱ�',
  `ignorePDR` int(3) NOT NULL DEFAULT '0' COMMENT '���ӹ�������ٷֱ�',
  `totalDamage` int(3) NOT NULL DEFAULT '0' COMMENT '���˺��ٷֱ�����',
  `allStat` int(3) NOT NULL DEFAULT '0' COMMENT '�������԰ٷֱ�����',
  `karmaCount` double(3,0) NOT NULL DEFAULT '-1',
  `sealedlevel` tinyint(1) NOT NULL DEFAULT '0',
  `sealedExp` bigint(20) NOT NULL DEFAULT '0',
  `tradeType` int(11) NOT NULL DEFAULT '0',
  `remark` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Owner` tinytext CHARACTER SET utf8,
  `expiredate` bigint(20) NOT NULL DEFAULT '-1',
  `itemSlot1` int(11) DEFAULT '-1',
  `itemSlot2` int(11) DEFAULT '-1',
  `itemSlot3` int(11) DEFAULT '-1',
  `soul` int(3) DEFAULT '0',
  `soulflag` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `cid` (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cashtradesystemstore
-- ----------------------------

-- ----------------------------
-- Table structure for `characters`
-- ----------------------------
DROP TABLE IF EXISTS `characters`;
CREATE TABLE `characters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accountid` int(11) NOT NULL DEFAULT '0',
  `position` tinyint(1) NOT NULL DEFAULT '0',
  `world` tinyint(1) NOT NULL DEFAULT '0',
  `name` varchar(13) NOT NULL DEFAULT '',
  `level` int(3) unsigned NOT NULL DEFAULT '0',
  `exp` bigint(20) NOT NULL DEFAULT '0',
  `str` int(5) NOT NULL DEFAULT '0',
  `dex` int(5) NOT NULL DEFAULT '0',
  `luk` int(5) NOT NULL DEFAULT '0',
  `int` int(5) NOT NULL DEFAULT '0',
  `hp` int(5) NOT NULL DEFAULT '0',
  `mp` int(5) NOT NULL DEFAULT '0',
  `maxhp` int(5) NOT NULL DEFAULT '0',
  `maxmp` int(5) NOT NULL DEFAULT '0',
  `meso` bigint(20) NOT NULL DEFAULT '0',
  `hpApUsed` int(5) NOT NULL DEFAULT '0',
  `mpApUsed` int(5) NOT NULL DEFAULT '0',
  `job` int(5) NOT NULL DEFAULT '0',
  `skincolor` tinyint(1) NOT NULL DEFAULT '0',
  `gender` tinyint(1) NOT NULL DEFAULT '0',
  `fame` int(5) NOT NULL DEFAULT '0',
  `hair` int(11) NOT NULL DEFAULT '0',
  `basecolor` tinyint(4) NOT NULL DEFAULT '-1',
  `mixedcolor` tinyint(4) NOT NULL DEFAULT '0',
  `probcolor` tinyint(4) NOT NULL DEFAULT '0',
  `face` int(11) NOT NULL DEFAULT '0',
  `ap` int(5) NOT NULL DEFAULT '0',
  `map` int(11) NOT NULL DEFAULT '0',
  `spawnpoint` int(3) NOT NULL DEFAULT '0',
  `party` int(11) NOT NULL DEFAULT '0',
  `buddyCapacity` int(3) NOT NULL DEFAULT '25',
  `createdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `guildid` int(10) unsigned NOT NULL DEFAULT '0',
  `guildrank` tinyint(1) unsigned NOT NULL DEFAULT '5',
  `allianceRank` tinyint(1) unsigned NOT NULL DEFAULT '5',
  `guildContribution` int(11) NOT NULL DEFAULT '0',
  `pets` varchar(13) NOT NULL DEFAULT '-1,-1,-1',
  `sp` varchar(255) NOT NULL DEFAULT '0,0,0,0,0,0,0,0,0,0',
  `subcategory` int(11) NOT NULL DEFAULT '0',
  `rank` int(11) NOT NULL DEFAULT '1',
  `rankMove` int(11) NOT NULL DEFAULT '0',
  `jobRank` int(11) NOT NULL DEFAULT '1',
  `jobRankMove` int(11) NOT NULL DEFAULT '0',
  `marriageId` int(11) NOT NULL DEFAULT '0',
  `familyid` int(11) NOT NULL DEFAULT '0',
  `seniorid` int(11) NOT NULL DEFAULT '0',
  `junior1` int(11) NOT NULL DEFAULT '0',
  `junior2` int(11) NOT NULL DEFAULT '0',
  `currentrep` int(11) NOT NULL DEFAULT '0',
  `totalrep` int(11) NOT NULL DEFAULT '0',
  `gachexp` int(11) NOT NULL DEFAULT '0',
  `fatigue` tinyint(4) NOT NULL DEFAULT '0',
  `charm` mediumint(7) NOT NULL DEFAULT '0',
  `craft` mediumint(7) NOT NULL DEFAULT '0',
  `charisma` mediumint(7) NOT NULL DEFAULT '0',
  `will` mediumint(7) NOT NULL DEFAULT '0',
  `sense` mediumint(7) NOT NULL DEFAULT '0',
  `insight` mediumint(7) NOT NULL DEFAULT '0',
  `totalWins` int(11) NOT NULL DEFAULT '0',
  `totalLosses` int(11) NOT NULL DEFAULT '0',
  `pvpExp` int(11) NOT NULL DEFAULT '0',
  `pvpPoints` int(11) NOT NULL DEFAULT '0',
  `decorate` int(11) NOT NULL DEFAULT '0',
  `elfEar` int(11) NOT NULL DEFAULT '0',
  `beans` int(11) NOT NULL DEFAULT '0',
  `warning` int(11) NOT NULL DEFAULT '0',
  `dollars` int(11) NOT NULL DEFAULT '0',
  `shareLots` int(11) NOT NULL DEFAULT '0',
  `reborns` int(11) NOT NULL DEFAULT '0',
  `reborns1` int(11) NOT NULL DEFAULT '0',
  `reborns2` int(11) NOT NULL DEFAULT '0',
  `reborns3` int(11) NOT NULL DEFAULT '0',
  `apstorage` int(11) NOT NULL DEFAULT '0',
  `honor` int(11) NOT NULL DEFAULT '0',
  `love` int(11) NOT NULL DEFAULT '0',
  `playerPoints` int(11) NOT NULL DEFAULT '0' COMMENT '角色積分',
  `playerEnergy` int(11) NOT NULL DEFAULT '0' COMMENT '角色活力值',
  `pvpDeaths` int(11) NOT NULL DEFAULT '0',
  `pvpKills` int(11) NOT NULL DEFAULT '0',
  `pvpVictory` int(11) NOT NULL DEFAULT '0',
  `todayonlinetime` int(10) NOT NULL DEFAULT '0',
  `totalonlinetime` int(11) NOT NULL DEFAULT '0',
  `dyjf` int(11) NOT NULL DEFAULT '0',
  `wp` int(11) NOT NULL DEFAULT '0',
  `pet_hp` int(11) NOT NULL DEFAULT '0',
  `pet_mp` int(11) NOT NULL DEFAULT '0',
  `pet_skill` int(11) NOT NULL DEFAULT '0',
  `friendshiptoadd` int(11) NOT NULL DEFAULT '0',
  `friendshippoints` varchar(255) NOT NULL DEFAULT '0,0,0,0,0',
  `jaguarId` int(11) NOT NULL DEFAULT '0',
  `replacement` int(11) NOT NULL DEFAULT '0',
  `capturedMonsters` varchar(255) NOT NULL DEFAULT '0,0,0,0,0',
  `salon_hair` int(11) NOT NULL DEFAULT '3',
  `salon_face` int(11) NOT NULL DEFAULT '3',
  `salon_skin` int(11) NOT NULL DEFAULT '0',
  `burningChrType` tinyint(1) NOT NULL DEFAULT '0',
  `burningChrTime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `accountid` (`accountid`),
  KEY `id` (`id`),
  KEY `guildid` (`guildid`),
  KEY `familyid` (`familyid`),
  KEY `marriageId` (`marriageId`),
  KEY `seniorid` (`seniorid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of characters
-- ----------------------------

-- ----------------------------
-- Table structure for `accounts_buylimit`
-- ----------------------------
DROP TABLE IF EXISTS `accounts_buylimit`;
CREATE TABLE `accounts_buylimit` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `account_id` int(11) NOT NULL DEFAULT '0',
  `world` int(11) NOT NULL DEFAULT '0',
  `shop_id` int(11) NOT NULL DEFAULT '0',
  `itemid` int(11) NOT NULL DEFAULT '0',
  `count` int(11) NOT NULL DEFAULT '0',
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `account_id` (`account_id`),
  CONSTRAINT `accounts_buylimit_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of accounts_buylimit
-- ----------------------------

-- ----------------------------
-- Table structure for `characters_buylimit`
-- ----------------------------
DROP TABLE IF EXISTS `characters_buylimit`;
CREATE TABLE `characters_buylimit` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `characters_id` int(11) NOT NULL DEFAULT '0',
  `shop_id` int(11) NOT NULL DEFAULT '0',
  `itemid` int(11) NOT NULL DEFAULT '0',
  `count` int(11) NOT NULL DEFAULT '0',
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `characters_id` (`characters_id`),
  CONSTRAINT `characters_buylimit_ibfk_1` FOREIGN KEY (`characters_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of characters_buylimit
-- ----------------------------

-- ----------------------------
-- Table structure for `character_cards`
-- ----------------------------
DROP TABLE IF EXISTS `character_cards`;
CREATE TABLE `character_cards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accid` int(11) NOT NULL DEFAULT '0',
  `worldid` int(11) NOT NULL DEFAULT '0',
  `characterid` int(11) NOT NULL DEFAULT '0',
  `position` int(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `accid` (`accid`),
  KEY `character_cards_ibfk_1` (`characterid`),
  CONSTRAINT `character_cards_ibfk_1` FOREIGN KEY (`characterid`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of character_cards
-- ----------------------------

-- ----------------------------
-- Table structure for `character_coreauras`
-- ----------------------------
DROP TABLE IF EXISTS `character_coreauras`;
CREATE TABLE `character_coreauras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL DEFAULT '0',
  `level` int(3) NOT NULL DEFAULT '0',
  `str` int(3) NOT NULL DEFAULT '0',
  `dex` int(3) NOT NULL DEFAULT '0',
  `int` int(3) NOT NULL DEFAULT '0',
  `luk` int(3) NOT NULL DEFAULT '0',
  `watk` int(3) NOT NULL DEFAULT '0',
  `magic` int(3) NOT NULL DEFAULT '0',
  `expiredate` bigint(20) NOT NULL DEFAULT '-1',
  PRIMARY KEY (`id`),
  KEY `FK_coreauras_1` (`characterid`) USING BTREE,
  CONSTRAINT `character_coreauras_ibfk_1` FOREIGN KEY (`characterid`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of character_coreauras
-- ----------------------------

-- ----------------------------
-- Table structure for `character_credit`
-- ----------------------------
DROP TABLE IF EXISTS `character_credit`;
CREATE TABLE `character_credit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL,
  `name` varchar(20) NOT NULL DEFAULT '',
  `value` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of character_credit
-- ----------------------------

-- ----------------------------
-- Table structure for `character_keyvalue`
-- ----------------------------
DROP TABLE IF EXISTS `character_keyvalue`;
CREATE TABLE `character_keyvalue` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL DEFAULT '0',
  `key` varchar(100) DEFAULT NULL,
  `value` varchar(999) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `characterid` (`characterid`),
  CONSTRAINT `character_keyvalue_ibfk_1` FOREIGN KEY (`characterid`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of character_keyvalue
-- ----------------------------

-- ----------------------------
-- Table structure for `character_memo`
-- ----------------------------
DROP TABLE IF EXISTS `character_memo`;
CREATE TABLE `character_memo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `characters_id` int(11) NOT NULL,
  `sender` varchar(13) NOT NULL DEFAULT '',
  `message` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `type` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `characters_id` (`characters_id`),
  CONSTRAINT `character_memo_ibfk_1` FOREIGN KEY (`characters_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of character_memo
-- ----------------------------

-- ----------------------------
-- Table structure for `character_potionpots`
-- ----------------------------
DROP TABLE IF EXISTS `character_potionpots`;
CREATE TABLE `character_potionpots` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL DEFAULT '0',
  `itemId` int(11) NOT NULL DEFAULT '0',
  `hp` int(11) NOT NULL DEFAULT '0',
  `mp` int(11) NOT NULL DEFAULT '0',
  `maxValue` int(11) NOT NULL DEFAULT '1000000',
  `startDate` bigint(20) NOT NULL DEFAULT '0',
  `endDate` bigint(20) NOT NULL DEFAULT '-1',
  PRIMARY KEY (`id`),
  KEY `FK_potionpots_1` (`characterid`) USING BTREE,
  CONSTRAINT `character_potionpots_ibfk_1` FOREIGN KEY (`characterid`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of character_potionpots
-- ----------------------------

-- ----------------------------
-- Table structure for `character_slots`
-- ----------------------------
DROP TABLE IF EXISTS `character_slots`;
CREATE TABLE `character_slots` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accid` int(11) NOT NULL DEFAULT '0',
  `worldid` int(11) NOT NULL DEFAULT '0',
  `charslots` int(11) NOT NULL DEFAULT '3',
  PRIMARY KEY (`id`),
  KEY `accid` (`accid`),
  KEY `id` (`id`),
  CONSTRAINT `character_slots_ibfk_1` FOREIGN KEY (`accid`) REFERENCES `accounts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of character_slots
-- ----------------------------

-- ----------------------------
-- Table structure for `character_soulcollection`
-- ----------------------------
DROP TABLE IF EXISTS `character_soulcollection`;
CREATE TABLE `character_soulcollection` (
  `characters_id` int(11) NOT NULL,
  `page` int(11) NOT NULL,
  `setsoul` int(11) NOT NULL,
  PRIMARY KEY (`characters_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of character_soulcollection
-- ----------------------------

-- ----------------------------
-- Table structure for `character_work`
-- ----------------------------
DROP TABLE IF EXISTS `character_work`;
CREATE TABLE `character_work` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accid` int(11) NOT NULL DEFAULT '0',
  `worldid` int(11) NOT NULL DEFAULT '0',
  `characterid` int(11) NOT NULL DEFAULT '0',
  `worktype` int(11) NOT NULL DEFAULT '0',
  `worktime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `accid` (`accid`) USING BTREE,
  KEY `characterid` (`characterid`) USING BTREE,
  CONSTRAINT `characterid` FOREIGN KEY (`characterid`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of character_work
-- ----------------------------

-- ----------------------------
-- Table structure for `cheatlog`
-- ----------------------------
DROP TABLE IF EXISTS `cheatlog`;
CREATE TABLE `cheatlog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL DEFAULT '0',
  `offense` tinytext NOT NULL,
  `count` int(11) NOT NULL DEFAULT '0',
  `lastoffensetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `param` tinytext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cid` (`characterid`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of cheatlog
-- ----------------------------

-- ----------------------------
-- Table structure for `chms_flowerpot`
-- ----------------------------
DROP TABLE IF EXISTS `chms_flowerpot`;
CREATE TABLE `chms_flowerpot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charid` int(11) NOT NULL,
  `seedid` int(11) DEFAULT NULL,
  `expiration` bigint(20) DEFAULT '-1',
  PRIMARY KEY (`id`),
  KEY `fk_charid2` (`charid`),
  CONSTRAINT `fk_charid2` FOREIGN KEY (`charid`) REFERENCES `characters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of chms_flowerpot
-- ----------------------------

-- ----------------------------
-- Table structure for `chms_garden`
-- ----------------------------
DROP TABLE IF EXISTS `chms_garden`;
CREATE TABLE `chms_garden` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charid` int(11) DEFAULT NULL,
  `level` smallint(5) DEFAULT NULL,
  `exp` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_charid` (`charid`),
  CONSTRAINT `fk_charid` FOREIGN KEY (`charid`) REFERENCES `characters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of chms_garden
-- ----------------------------
INSERT INTO `chms_garden` VALUES ('404', '20', '1', '0');

-- ----------------------------
-- Table structure for `chms_seedpackage`
-- ----------------------------
DROP TABLE IF EXISTS `chms_seedpackage`;
CREATE TABLE `chms_seedpackage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charid` int(11) NOT NULL,
  `seedid` int(11) NOT NULL,
  `quantity` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_charid3` (`charid`),
  CONSTRAINT `fk_charid3` FOREIGN KEY (`charid`) REFERENCES `characters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of chms_seedpackage
-- ----------------------------

-- ----------------------------
-- Table structure for `compensationlog_confirmed`
-- ----------------------------
DROP TABLE IF EXISTS `compensationlog_confirmed`;
CREATE TABLE `compensationlog_confirmed` (
  `chrname` varchar(25) NOT NULL DEFAULT '',
  `donor` tinyint(1) NOT NULL DEFAULT '0',
  `value` int(11) NOT NULL DEFAULT '0',
  `taken` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`chrname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of compensationlog_confirmed
-- ----------------------------

-- ----------------------------
-- Table structure for `damageskin`
-- ----------------------------
DROP TABLE IF EXISTS `damageskin`;
CREATE TABLE `damageskin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `skinid` int(11) NOT NULL,
  `itemid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of damageskin
-- ----------------------------
INSERT INTO `damageskin` VALUES ('1', '29', '2433990');

-- ----------------------------
-- Table structure for `data_customscroll`
-- ----------------------------
DROP TABLE IF EXISTS `data_customscroll`;
CREATE TABLE `data_customscroll` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `type` set('武器','防具','飾品','手套') CHARACTER SET utf8 NOT NULL DEFAULT '武器',
  `style` set('藍色','灰色','棕色','金色') CHARACTER SET utf8 NOT NULL DEFAULT '藍色',
  `watk` smallint(11) NOT NULL DEFAULT '0',
  `matk` smallint(11) NOT NULL DEFAULT '0',
  `str` smallint(11) NOT NULL DEFAULT '0',
  `dex` smallint(11) NOT NULL DEFAULT '0',
  `int` smallint(11) NOT NULL DEFAULT '0',
  `luk` smallint(11) NOT NULL DEFAULT '0',
  `wdef` smallint(11) NOT NULL DEFAULT '0',
  `mdef` smallint(11) NOT NULL DEFAULT '0',
  `maxhp` smallint(11) NOT NULL DEFAULT '0',
  `maxmp` smallint(11) NOT NULL DEFAULT '0',
  `acc` smallint(11) NOT NULL DEFAULT '0',
  `avoid` smallint(11) NOT NULL DEFAULT '0',
  `jump` smallint(11) NOT NULL DEFAULT '0',
  `speed` smallint(11) NOT NULL DEFAULT '0',
  `succ` tinyint(11) NOT NULL DEFAULT '0',
  `need` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of data_customscroll
-- ----------------------------
INSERT INTO `data_customscroll` VALUES ('1', '攻擊力卷軸100%', '武器', '藍色', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '100', '25');
INSERT INTO `data_customscroll` VALUES ('2', '攻擊力卷軸70%', '武器', '灰色', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '70', '50');
INSERT INTO `data_customscroll` VALUES ('3', '攻擊力（力量）卷軸30%', '武器', '棕色', '4', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '30', '75');
INSERT INTO `data_customscroll` VALUES ('4', '攻擊力（力量）卷軸15%', '武器', '金色', '6', '0', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '15', '100');
INSERT INTO `data_customscroll` VALUES ('5', '攻擊力（敏捷）卷軸30%', '武器', '棕色', '4', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '30', '75');
INSERT INTO `data_customscroll` VALUES ('6', '攻擊力（敏捷）卷軸15%', '武器', '金色', '6', '0', '0', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '15', '100');
INSERT INTO `data_customscroll` VALUES ('7', '攻擊力（智力）卷軸30%', '武器', '棕色', '4', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '30', '75');
INSERT INTO `data_customscroll` VALUES ('8', '攻擊力（智力）卷軸15%', '武器', '金色', '6', '0', '0', '0', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '15', '100');
INSERT INTO `data_customscroll` VALUES ('9', '攻擊力（運氣）卷軸30%', '武器', '棕色', '4', '0', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '30', '75');
INSERT INTO `data_customscroll` VALUES ('10', '攻擊力（運氣）卷軸15%', '武器', '金色', '6', '0', '0', '0', '0', '3', '0', '0', '0', '0', '0', '0', '0', '0', '15', '100');
INSERT INTO `data_customscroll` VALUES ('11', '攻擊力（體力）卷軸30%', '武器', '棕色', '4', '0', '0', '0', '0', '0', '0', '0', '50', '0', '0', '0', '0', '0', '30', '75');
INSERT INTO `data_customscroll` VALUES ('12', '攻擊力（體力）卷軸15%', '武器', '金色', '6', '0', '0', '0', '0', '0', '0', '0', '100', '0', '0', '0', '0', '0', '15', '100');
INSERT INTO `data_customscroll` VALUES ('13', '魔力卷軸100%', '武器', '藍色', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '100', '25');
INSERT INTO `data_customscroll` VALUES ('14', '魔力卷軸70%', '武器', '灰色', '0', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '70', '50');
INSERT INTO `data_customscroll` VALUES ('15', '魔力（智力）卷軸30%', '武器', '棕色', '0', '4', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '30', '75');
INSERT INTO `data_customscroll` VALUES ('16', '魔力（智力）卷軸15%', '武器', '金色', '0', '6', '0', '0', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '15', '100');
INSERT INTO `data_customscroll` VALUES ('17', '力量卷軸100%', '防具', '藍色', '0', '0', '2', '0', '0', '0', '2', '2', '20', '0', '0', '0', '0', '0', '100', '25');
INSERT INTO `data_customscroll` VALUES ('18', '力量卷軸70%', '防具', '灰色', '0', '0', '3', '0', '0', '0', '4', '4', '40', '0', '0', '0', '0', '0', '70', '50');
INSERT INTO `data_customscroll` VALUES ('19', '力量卷軸30%', '防具', '棕色', '0', '0', '5', '0', '0', '0', '7', '7', '70', '0', '0', '0', '0', '0', '30', '75');
INSERT INTO `data_customscroll` VALUES ('20', '敏捷卷軸100%', '防具', '藍色', '0', '0', '0', '2', '0', '0', '2', '2', '20', '0', '0', '0', '0', '0', '100', '25');
INSERT INTO `data_customscroll` VALUES ('21', '敏捷卷軸70%', '防具', '灰色', '0', '0', '0', '3', '0', '0', '4', '4', '40', '0', '0', '0', '0', '0', '70', '50');
INSERT INTO `data_customscroll` VALUES ('22', '敏捷卷軸30%', '防具', '棕色', '0', '0', '0', '5', '0', '0', '7', '7', '70', '0', '0', '0', '0', '0', '30', '75');
INSERT INTO `data_customscroll` VALUES ('23', '智力卷軸100%', '防具', '藍色', '0', '0', '0', '0', '2', '0', '2', '2', '20', '0', '0', '0', '0', '0', '100', '25');
INSERT INTO `data_customscroll` VALUES ('24', '智力卷軸70%', '防具', '灰色', '0', '0', '0', '0', '3', '0', '4', '4', '40', '0', '0', '0', '0', '0', '70', '50');
INSERT INTO `data_customscroll` VALUES ('25', '智力卷軸30%', '防具', '棕色', '0', '0', '0', '0', '5', '0', '7', '7', '70', '0', '0', '0', '0', '0', '30', '75');
INSERT INTO `data_customscroll` VALUES ('26', '運氣卷軸100%', '防具', '藍色', '0', '0', '0', '0', '0', '2', '2', '2', '20', '0', '0', '0', '0', '0', '100', '25');
INSERT INTO `data_customscroll` VALUES ('27', '運氣卷軸70%', '防具', '灰色', '0', '0', '0', '0', '0', '3', '4', '4', '40', '0', '0', '0', '0', '0', '70', '50');
INSERT INTO `data_customscroll` VALUES ('28', '運氣卷軸30%', '防具', '棕色', '0', '0', '0', '0', '0', '5', '7', '7', '70', '0', '0', '0', '0', '0', '30', '75');
INSERT INTO `data_customscroll` VALUES ('29', '體力卷軸100%', '防具', '藍色', '0', '0', '0', '0', '0', '0', '2', '2', '120', '0', '0', '0', '0', '0', '100', '25');
INSERT INTO `data_customscroll` VALUES ('30', '體力卷軸70%', '防具', '灰色', '0', '0', '0', '0', '0', '0', '4', '4', '190', '0', '0', '0', '0', '0', '70', '50');
INSERT INTO `data_customscroll` VALUES ('31', '體力卷軸30%', '防具', '棕色', '0', '0', '0', '0', '0', '0', '7', '7', '360', '0', '0', '0', '0', '0', '30', '75');
INSERT INTO `data_customscroll` VALUES ('32', '力量卷軸100%', '飾品', '藍色', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '15', '15', '0', '0', '100', '25');
INSERT INTO `data_customscroll` VALUES ('33', '力量卷軸70%', '飾品', '灰色', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '30', '30', '0', '0', '70', '50');
INSERT INTO `data_customscroll` VALUES ('34', '力量卷軸30%', '飾品', '棕色', '0', '0', '4', '0', '0', '0', '0', '0', '0', '0', '45', '45', '0', '0', '30', '75');
INSERT INTO `data_customscroll` VALUES ('35', '敏捷卷軸100%', '飾品', '藍色', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '15', '15', '0', '0', '100', '25');
INSERT INTO `data_customscroll` VALUES ('36', '敏捷卷軸70%', '飾品', '灰色', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '30', '30', '0', '0', '70', '50');
INSERT INTO `data_customscroll` VALUES ('37', '敏捷卷軸30%', '飾品', '棕色', '0', '0', '0', '4', '0', '0', '0', '0', '0', '0', '45', '45', '0', '0', '30', '75');
INSERT INTO `data_customscroll` VALUES ('38', '智力卷軸100%', '飾品', '藍色', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '15', '15', '0', '0', '100', '25');
INSERT INTO `data_customscroll` VALUES ('39', '智力卷軸70%', '飾品', '灰色', '0', '0', '0', '0', '2', '0', '0', '0', '0', '0', '30', '30', '0', '0', '70', '50');
INSERT INTO `data_customscroll` VALUES ('40', '智力卷軸30%', '飾品', '棕色', '0', '0', '0', '0', '4', '0', '0', '0', '0', '0', '45', '45', '0', '0', '30', '75');
INSERT INTO `data_customscroll` VALUES ('41', '運氣卷軸100%', '飾品', '藍色', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '15', '15', '0', '0', '100', '25');
INSERT INTO `data_customscroll` VALUES ('42', '運氣卷軸70%', '飾品', '灰色', '0', '0', '0', '0', '0', '2', '0', '0', '0', '0', '30', '30', '0', '0', '70', '50');
INSERT INTO `data_customscroll` VALUES ('43', '運氣卷軸30%', '飾品', '棕色', '0', '0', '0', '0', '0', '4', '0', '0', '0', '0', '45', '45', '0', '0', '30', '75');
INSERT INTO `data_customscroll` VALUES ('44', '體力卷軸100%', '飾品', '藍色', '0', '0', '0', '0', '0', '0', '0', '0', '50', '0', '15', '15', '0', '0', '100', '25');
INSERT INTO `data_customscroll` VALUES ('45', '體力卷軸70%', '飾品', '灰色', '0', '0', '0', '0', '0', '0', '0', '0', '100', '0', '30', '30', '0', '0', '70', '50');
INSERT INTO `data_customscroll` VALUES ('46', '體力卷軸30%', '飾品', '棕色', '0', '0', '0', '0', '0', '0', '0', '0', '200', '0', '45', '45', '0', '0', '30', '75');
INSERT INTO `data_customscroll` VALUES ('47', '攻擊力卷軸100%', '手套', '藍色', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '100', '25');
INSERT INTO `data_customscroll` VALUES ('48', '攻擊力卷軸70%', '手套', '灰色', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '70', '50');
INSERT INTO `data_customscroll` VALUES ('49', '攻擊力卷軸30%', '手套', '棕色', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '30', '75');
INSERT INTO `data_customscroll` VALUES ('50', '魔力卷軸100%', '手套', '藍色', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '100', '25');
INSERT INTO `data_customscroll` VALUES ('51', '魔力卷軸70%', '手套', '灰色', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '70', '50');
INSERT INTO `data_customscroll` VALUES ('52', '魔力卷軸30%', '手套', '棕色', '0', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '30', '75');

-- ----------------------------
-- Table structure for `days_check_log`
-- ----------------------------
DROP TABLE IF EXISTS `days_check_log`;
CREATE TABLE `days_check_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charid` int(11) NOT NULL,
  `times` int(1) NOT NULL DEFAULT '0',
  `lasttime` timestamp NULL DEFAULT '1999-01-01 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of days_check_log
-- ----------------------------
INSERT INTO `days_check_log` VALUES ('1', '10002', '0', '1999-01-01 00:00:00');

-- ----------------------------
-- Table structure for `dojorankings`
-- ----------------------------
DROP TABLE IF EXISTS `dojorankings`;
CREATE TABLE `dojorankings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rank` int(11) NOT NULL,
  `name` varchar(13) NOT NULL,
  `time` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dojorankings
-- ----------------------------

-- ----------------------------
-- Table structure for `donate`
-- ----------------------------
DROP TABLE IF EXISTS `donate`;
CREATE TABLE `donate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL DEFAULT '',
  `amount` varchar(20) NOT NULL DEFAULT '',
  `paymentMethod` varchar(20) NOT NULL DEFAULT '',
  `date` varchar(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of donate
-- ----------------------------

-- ----------------------------
-- Table structure for `donorlog`
-- ----------------------------
DROP TABLE IF EXISTS `donorlog`;
CREATE TABLE `donorlog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accname` varchar(25) NOT NULL DEFAULT '',
  `accId` int(11) NOT NULL DEFAULT '0',
  `chrname` varchar(25) NOT NULL DEFAULT '',
  `chrId` int(11) NOT NULL DEFAULT '0',
  `log` varchar(4096) NOT NULL DEFAULT '',
  `time` varchar(25) NOT NULL DEFAULT '',
  `previousPoints` int(11) NOT NULL DEFAULT '0',
  `currentPoints` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of donorlog
-- ----------------------------

-- ----------------------------
-- Table structure for `drop_data`
-- ----------------------------
DROP TABLE IF EXISTS `drop_data`;
CREATE TABLE `drop_data` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `dropperid` int(11) NOT NULL,
  `itemid` int(11) NOT NULL DEFAULT '0',
  `minimum_quantity` tinyint(3) NOT NULL DEFAULT '1',
  `maximum_quantity` tinyint(3) NOT NULL DEFAULT '1',
  `questid` int(11) NOT NULL DEFAULT '0',
  `chance` int(11) NOT NULL DEFAULT '0',
  `itemname` text,
  `channel` varchar(100) NOT NULL DEFAULT '',
  `onlySelf` tinyint(1) NOT NULL DEFAULT '0',
  `period` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mobid` (`dropperid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of drop_data
-- ----------------------------

-- ----------------------------
-- Table structure for `drop_data_global`
-- ----------------------------
DROP TABLE IF EXISTS `drop_data_global`;
CREATE TABLE `drop_data_global` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `continent` int(11) NOT NULL,
  `dropType` tinyint(1) NOT NULL DEFAULT '0',
  `itemid` int(11) NOT NULL DEFAULT '0',
  `minimum_quantity` int(11) NOT NULL DEFAULT '1',
  `maximum_quantity` int(11) NOT NULL DEFAULT '1',
  `questid` int(11) NOT NULL DEFAULT '0',
  `chance` int(11) NOT NULL DEFAULT '0',
  `comments` varchar(45) DEFAULT NULL,
  `channel` varchar(100) NOT NULL DEFAULT '',
  `min_mob_level` int(11) NOT NULL DEFAULT '0',
  `max_mob_level` int(11) NOT NULL DEFAULT '0',
  `onlySelf` tinyint(1) NOT NULL DEFAULT '0',
  `period` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `mobid` (`continent`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of drop_data_global
-- ----------------------------

-- ----------------------------
-- Table structure for `drop_data_special`
-- ----------------------------
DROP TABLE IF EXISTS `drop_data_special`;
CREATE TABLE `drop_data_special` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `mapid` int(9) NOT NULL DEFAULT '0',
  `dropperid` int(11) NOT NULL,
  `itemid` int(11) NOT NULL DEFAULT '0',
  `quantity` int(11) NOT NULL DEFAULT '1',
  `chance` int(11) NOT NULL DEFAULT '0',
  `msgType` tinyint(1) NOT NULL DEFAULT '0',
  `period` tinyint(1) DEFAULT '0',
  `state` tinyint(1) DEFAULT '0',
  `comments` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `dropperid` (`dropperid`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of drop_data_special
-- ----------------------------
INSERT INTO `drop_data_special` VALUES ('49', '0', '2300000', '0', '1', '900', '0', '0', '0', '經驗或金幣');
INSERT INTO `drop_data_special` VALUES ('50', '0', '2300000', '0', '1', '900', '0', '0', '0', '經驗或金幣');
INSERT INTO `drop_data_special` VALUES ('51', '0', '2300000', '0', '1', '900', '0', '0', '0', '經驗或金幣');
INSERT INTO `drop_data_special` VALUES ('52', '0', '2300000', '0', '1', '900', '0', '0', '0', '經驗或金幣');
INSERT INTO `drop_data_special` VALUES ('53', '0', '2300000', '0', '1', '900', '0', '0', '0', '經驗或金幣');
INSERT INTO `drop_data_special` VALUES ('54', '0', '2300000', '4031630', '1', '800', '0', '0', '0', '鯉魚(30cm)');
INSERT INTO `drop_data_special` VALUES ('55', '0', '2300000', '4031631', '1', '600', '0', '0', '0', '鮭魚(150cm)');
INSERT INTO `drop_data_special` VALUES ('56', '0', '2300000', '4031633', '1', '800', '0', '0', '0', '青魚(3.6cm)');
INSERT INTO `drop_data_special` VALUES ('57', '0', '2300000', '4031634', '1', '700', '0', '0', '0', '青魚(5cm)');
INSERT INTO `drop_data_special` VALUES ('58', '0', '2300000', '4031635', '1', '600', '0', '0', '0', '青魚(6.5cm)');
INSERT INTO `drop_data_special` VALUES ('59', '0', '2300000', '4031636', '1', '500', '0', '0', '0', '青魚(10cm)');
INSERT INTO `drop_data_special` VALUES ('60', '0', '2300000', '4031637', '1', '800', '0', '0', '0', '鯉魚(53cm)');
INSERT INTO `drop_data_special` VALUES ('61', '0', '2300000', '4031638', '1', '700', '0', '0', '0', '鯉魚(60cm)');
INSERT INTO `drop_data_special` VALUES ('62', '0', '2300000', '4031639', '1', '600', '0', '0', '0', '鯉魚(100cm)');
INSERT INTO `drop_data_special` VALUES ('63', '0', '2300000', '4031640', '1', '500', '0', '0', '0', '鯉魚(113cm)');
INSERT INTO `drop_data_special` VALUES ('64', '0', '2300000', '4031641', '1', '800', '0', '0', '0', '劍魚(128cm)');
INSERT INTO `drop_data_special` VALUES ('65', '0', '2300000', '4031642', '1', '700', '0', '0', '0', '劍魚(131cm)');
INSERT INTO `drop_data_special` VALUES ('66', '0', '2300000', '4031643', '1', '600', '0', '0', '0', '劍魚(140cm)');
INSERT INTO `drop_data_special` VALUES ('67', '0', '2300000', '4031644', '1', '500', '0', '0', '0', '劍魚(148cm)');
INSERT INTO `drop_data_special` VALUES ('68', '0', '2300000', '4031645', '1', '800', '0', '0', '0', '鮭魚(166cm)');
INSERT INTO `drop_data_special` VALUES ('69', '0', '2300000', '4031646', '1', '700', '0', '0', '0', '鮭魚(183cm)');
INSERT INTO `drop_data_special` VALUES ('70', '0', '2300000', '4031647', '1', '600', '0', '0', '0', '鮭魚(227cm)');
INSERT INTO `drop_data_special` VALUES ('71', '0', '2300000', '4031648', '1', '500', '0', '0', '0', '鮭魚(288cm)');
INSERT INTO `drop_data_special` VALUES ('72', '0', '2300000', '2431690', '1', '50', '0', '0', '0', '金龍魚');
INSERT INTO `drop_data_special` VALUES ('73', '0', '2300001', '0', '1', '800', '0', '0', '0', '經驗或金幣');
INSERT INTO `drop_data_special` VALUES ('74', '0', '2300001', '0', '1', '800', '0', '0', '0', '經驗或金幣');
INSERT INTO `drop_data_special` VALUES ('75', '0', '2300001', '0', '1', '800', '0', '0', '0', '經驗或金幣');
INSERT INTO `drop_data_special` VALUES ('76', '0', '2300001', '0', '1', '800', '0', '0', '0', '經驗或金幣');
INSERT INTO `drop_data_special` VALUES ('77', '0', '2300001', '0', '1', '800', '0', '0', '0', '經驗或金幣');
INSERT INTO `drop_data_special` VALUES ('78', '0', '2300001', '4031630', '1', '800', '0', '0', '0', '鯉魚(30cm)');
INSERT INTO `drop_data_special` VALUES ('79', '0', '2300001', '4031631', '1', '600', '0', '0', '0', '鮭魚(150cm)');
INSERT INTO `drop_data_special` VALUES ('80', '0', '2300001', '4031633', '1', '800', '0', '0', '0', '青魚(3.6cm)');
INSERT INTO `drop_data_special` VALUES ('81', '0', '2300001', '4031634', '1', '700', '0', '0', '0', '青魚(5cm)');
INSERT INTO `drop_data_special` VALUES ('82', '0', '2300001', '4031635', '1', '600', '0', '0', '0', '青魚(6.5cm)');
INSERT INTO `drop_data_special` VALUES ('83', '0', '2300001', '4031636', '1', '500', '0', '0', '0', '青魚(10cm)');
INSERT INTO `drop_data_special` VALUES ('84', '0', '2300001', '4031637', '1', '800', '0', '0', '0', '鯉魚(53cm)');
INSERT INTO `drop_data_special` VALUES ('85', '0', '2300001', '4031638', '1', '700', '0', '0', '0', '鯉魚(60cm)');
INSERT INTO `drop_data_special` VALUES ('86', '0', '2300001', '4031639', '1', '600', '0', '0', '0', '鯉魚(100cm)');
INSERT INTO `drop_data_special` VALUES ('87', '0', '2300001', '4031640', '1', '500', '0', '0', '0', '鯉魚(113cm)');
INSERT INTO `drop_data_special` VALUES ('88', '0', '2300001', '4031641', '1', '800', '0', '0', '0', '劍魚(128cm)');
INSERT INTO `drop_data_special` VALUES ('89', '0', '2300001', '4031642', '1', '700', '0', '0', '0', '劍魚(131cm)');
INSERT INTO `drop_data_special` VALUES ('90', '0', '2300001', '4031643', '1', '600', '0', '0', '0', '劍魚(140cm)');
INSERT INTO `drop_data_special` VALUES ('91', '0', '2300001', '4031644', '1', '500', '0', '0', '0', '劍魚(148cm)');
INSERT INTO `drop_data_special` VALUES ('92', '0', '2300001', '4031645', '1', '800', '0', '0', '0', '鮭魚(166cm)');
INSERT INTO `drop_data_special` VALUES ('93', '0', '2300001', '4031646', '1', '700', '0', '0', '0', '鮭魚(183cm)');
INSERT INTO `drop_data_special` VALUES ('94', '0', '2300001', '4031647', '1', '600', '0', '0', '0', '鮭魚(227cm)');
INSERT INTO `drop_data_special` VALUES ('95', '0', '2300001', '4031648', '1', '500', '0', '0', '0', '鮭魚(288cm)');
INSERT INTO `drop_data_special` VALUES ('96', '0', '2300001', '2431690', '1', '100', '0', '0', '0', '金龍魚');
INSERT INTO `drop_data_special` VALUES ('97', '0', '2300001', '5064000', '1', '100', '0', '0', '0', '防爆卷軸');
INSERT INTO `drop_data_special` VALUES ('98', '0', '2300001', '2432014', '1', '10', '0', '0', '0', '女神之血滴');
INSERT INTO `drop_data_special` VALUES ('99', '0', '2300001', '5062002', '1', '80', '0', '0', '0', '高級神奇魔方');
INSERT INTO `drop_data_special` VALUES ('100', '0', '2300001', '2431825', '1', '20', '0', '0', '0', '妮娜的魔法30天使用券');
INSERT INTO `drop_data_special` VALUES ('101', '0', '2300001', '2430416', '1', '20', '0', '0', '0', '妮娜的魔法7天使用券');
INSERT INTO `drop_data_special` VALUES ('102', '0', '5601000', '4000517', '1', '5000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('103', '0', '5601000', '4031627', '1', '700000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('104', '0', '5601000', '4031630', '1', '700000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('105', '0', '5601000', '4031628', '1', '700000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('106', '0', '5601000', '4031633', '1', '600000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('107', '0', '5601000', '4031637', '1', '600000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('108', '0', '5601000', '4031641', '1', '600000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('109', '0', '5601000', '4031634', '1', '450000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('110', '0', '5601000', '4031638', '1', '450000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('111', '0', '5601000', '4031642', '1', '450000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('112', '0', '5601000', '4031635', '1', '450000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('113', '0', '5601000', '4031636', '1', '450000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('114', '0', '5601000', '4031639', '1', '400000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('115', '0', '5601000', '4031640', '1', '350000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('116', '0', '5601000', '4031631', '1', '300000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('117', '0', '5601000', '4031643', '1', '300000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('118', '0', '5601000', '4031644', '1', '250000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('119', '0', '5601000', '4031645', '1', '250000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('120', '0', '5601000', '4031646', '1', '200000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('121', '0', '5601000', '4031647', '1', '100000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('122', '0', '5601000', '4031648', '1', '50000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('123', '0', '5601000', '4310088', '1', '20000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('124', '0', '5601000', '4310085', '1', '2000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('125', '0', '5601000', '2431935', '1', '3000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('126', '0', '5601000', '2431936', '1', '3000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('127', '0', '5601000', '4000000', '1', '1000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('128', '0', '5601000', '4000000', '1', '1000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('129', '0', '5601001', '4000517', '1', '5000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('130', '0', '5601001', '4031627', '1', '700000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('131', '0', '5601001', '4031630', '1', '700000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('132', '0', '5601001', '4031628', '1', '700000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('133', '0', '5601001', '4031633', '1', '600000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('134', '0', '5601001', '4031637', '1', '600000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('135', '0', '5601001', '4031641', '1', '600000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('136', '0', '5601001', '4031634', '1', '450000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('137', '0', '5601001', '4031638', '1', '450000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('138', '0', '5601001', '4031642', '1', '450000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('139', '0', '5601001', '4031635', '1', '450000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('140', '0', '5601001', '4031636', '1', '450000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('141', '0', '5601001', '4031639', '1', '400000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('142', '0', '5601001', '4031640', '1', '350000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('143', '0', '5601001', '4031631', '1', '300000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('144', '0', '5601001', '4031643', '1', '300000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('145', '0', '5601001', '4031644', '1', '250000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('146', '0', '5601001', '4031645', '1', '250000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('147', '0', '5601001', '4031646', '1', '200000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('148', '0', '5601001', '4031647', '1', '100000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('149', '0', '5601001', '4031648', '1', '50000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('150', '0', '5601001', '4310088', '1', '20000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('151', '0', '5601001', '4310085', '1', '2000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('152', '0', '5601001', '2431935', '1', '3000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('153', '0', '5601001', '2431936', '1', '3000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('154', '0', '5601001', '4000000', '1', '1000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('155', '0', '5601001', '4000000', '1', '1000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('156', '0', '5601002', '4000517', '1', '5000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('157', '0', '5601002', '4031627', '1', '700000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('158', '0', '5601002', '4031630', '1', '700000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('159', '0', '5601002', '4031628', '1', '700000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('160', '0', '5601002', '4031633', '1', '600000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('161', '0', '5601002', '4031637', '1', '600000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('162', '0', '5601002', '4031641', '1', '600000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('163', '0', '5601002', '4031634', '1', '450000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('164', '0', '5601002', '4031638', '1', '450000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('165', '0', '5601002', '4031642', '1', '450000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('166', '0', '5601002', '4031635', '1', '450000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('167', '0', '5601002', '4031636', '1', '450000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('168', '0', '5601002', '4031639', '1', '400000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('169', '0', '5601002', '4031640', '1', '350000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('170', '0', '5601002', '4031631', '1', '300000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('171', '0', '5601002', '4031643', '1', '300000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('172', '0', '5601002', '4031644', '1', '250000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('173', '0', '5601002', '4031645', '1', '250000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('174', '0', '5601002', '4031646', '1', '200000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('175', '0', '5601002', '4031647', '1', '100000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('176', '0', '5601002', '4031648', '1', '50000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('177', '0', '5601002', '4310088', '1', '20000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('178', '0', '5601002', '4310085', '1', '2000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('179', '0', '5601002', '2431935', '1', '3000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('180', '0', '5601002', '2431936', '1', '3000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('181', '0', '5601002', '4000000', '1', '1000', '0', '0', '0', null);
INSERT INTO `drop_data_special` VALUES ('182', '0', '5601002', '4000000', '1', '1000', '0', '0', '0', null);

-- ----------------------------
-- Table structure for `dueypackages`
-- ----------------------------
DROP TABLE IF EXISTS `dueypackages`;
CREATE TABLE `dueypackages` (
  `PackageId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `RecieverId` int(10) NOT NULL,
  `SenderName` varchar(13) NOT NULL,
  `Mesos` int(10) unsigned DEFAULT '0',
  `TimeStamp` bigint(20) unsigned DEFAULT NULL,
  `Checked` tinyint(1) unsigned DEFAULT '1',
  `Type` tinyint(1) unsigned NOT NULL,
  PRIMARY KEY (`PackageId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of dueypackages
-- ----------------------------

-- ----------------------------
-- Table structure for `effectswitch`
-- ----------------------------
DROP TABLE IF EXISTS `effectswitch`;
CREATE TABLE `effectswitch` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL,
  `pos` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of effectswitch
-- ----------------------------

-- ----------------------------
-- Table structure for `eventforday`
-- ----------------------------
DROP TABLE IF EXISTS `eventforday`;
CREATE TABLE `eventforday` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `eventid` varchar(20) NOT NULL,
  `count` int(10) NOT NULL DEFAULT '0',
  `time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `eventid` (`eventid`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of eventforday
-- ----------------------------

-- ----------------------------
-- Table structure for `eventtimes`
-- ----------------------------
DROP TABLE IF EXISTS `eventtimes`;
CREATE TABLE `eventtimes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `eventid` int(11) NOT NULL DEFAULT '0',
  `cid` int(11) NOT NULL DEFAULT '0',
  `cName` varchar(15) CHARACTER SET utf8 NOT NULL,
  `points` int(11) NOT NULL DEFAULT '0',
  `times` int(11) NOT NULL DEFAULT '0',
  `date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of eventtimes
-- ----------------------------
-- ----------------------------
-- Table structure for `famelog`
-- ----------------------------
DROP TABLE IF EXISTS `famelog`;
CREATE TABLE `famelog` (
  `famelogid` int(11) NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL DEFAULT '0',
  `characterid_to` int(11) NOT NULL DEFAULT '0',
  `when` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`famelogid`),
  KEY `characterid` (`characterid`),
  CONSTRAINT `famelog_ibfk_1` FOREIGN KEY (`characterid`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of famelog
-- ----------------------------

-- ----------------------------
-- Table structure for `familiarcard`
-- ----------------------------
DROP TABLE IF EXISTS `familiarcard`;
CREATE TABLE `familiarcard` (
  `familiarcardid` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `inventoryitemid` bigint(20) unsigned NOT NULL DEFAULT '0',
  `level` tinyint(1) NOT NULL DEFAULT '0',
  `grade` tinyint(1) NOT NULL DEFAULT '1',
  `skill` smallint(6) NOT NULL DEFAULT '0',
  `option1` int(11) NOT NULL DEFAULT '0',
  `option2` int(11) NOT NULL DEFAULT '0',
  `option3` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`familiarcardid`),
  KEY `inventoryitemid` (`inventoryitemid`),
  CONSTRAINT `familiarcard_ibfk_1` FOREIGN KEY (`inventoryitemid`) REFERENCES `inventoryitems` (`inventoryitemid`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of familiarcard
-- ----------------------------

-- ----------------------------
-- Table structure for `familiars`
-- ----------------------------
DROP TABLE IF EXISTS `familiars`;
CREATE TABLE `familiars` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL DEFAULT '0',
  `familiar` int(11) NOT NULL DEFAULT '0',
  `name` varchar(40) NOT NULL DEFAULT '',
  `level` tinyint(1) NOT NULL DEFAULT '1',
  `exp` int(11) NOT NULL DEFAULT '0',
  `grade` tinyint(1) NOT NULL DEFAULT '0',
  `skillid` smallint(3) NOT NULL,
  `option1` int(11) NOT NULL DEFAULT '-1',
  `option2` int(11) NOT NULL DEFAULT '-1',
  `option3` int(11) NOT NULL DEFAULT '-1',
  `summon` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of familiars
-- ----------------------------
INSERT INTO `familiars` VALUES ('3907', '30078', '9970094', '', '1', '0', '2', '872', '20009', '20037', '10011', '0');
INSERT INTO `familiars` VALUES ('3908', '30078', '9970144', '', '1', '0', '0', '863', '7', '1', '2', '0');
INSERT INTO `familiars` VALUES ('3909', '30078', '9970043', '', '1', '0', '1', '828', '10011', '10035', '15', '0');
INSERT INTO `familiars` VALUES ('3910', '30078', '9970066', '', '1', '0', '2', '875', '20042', '10023', '20030', '0');
INSERT INTO `familiars` VALUES ('3911', '30078', '9970164', '', '1', '0', '0', '835', '17', '6', '19', '0');
INSERT INTO `familiars` VALUES ('3912', '30078', '9970029', '', '1', '0', '1', '860', '10042', '10034', '10020', '0');
INSERT INTO `familiars` VALUES ('3913', '30078', '9970129', '', '1', '0', '1', '832', '10009', '10004', '10008', '0');
INSERT INTO `familiars` VALUES ('3914', '30078', '9970023', '', '1', '0', '0', '826', '17', '14', '12', '0');
INSERT INTO `familiars` VALUES ('3915', '30078', '9970053', '', '1', '0', '1', '827', '10026', '10004', '7', '0');
INSERT INTO `familiars` VALUES ('3916', '30078', '9970024', '', '1', '0', '1', '855', '10001', '10007', '1', '0');
INSERT INTO `familiars` VALUES ('3917', '30078', '9970072', '', '1', '0', '1', '878', '10035', '12', '10027', '0');
INSERT INTO `familiars` VALUES ('3918', '30078', '9970124', '', '1', '0', '1', '869', '10043', '10017', '10006', '0');
INSERT INTO `familiars` VALUES ('3919', '30078', '9970082', '', '1', '0', '3', '807', '30021', '30001', '30020', '0');
INSERT INTO `familiars` VALUES ('3920', '30078', '9970171', '', '1', '0', '1', '812', '10005', '19', '6', '0');
INSERT INTO `familiars` VALUES ('3921', '30078', '9970063', '', '1', '0', '1', '809', '10030', '16', '3', '0');
INSERT INTO `familiars` VALUES ('3922', '30078', '9970129', '', '1', '0', '2', '845', '20019', '10031', '20032', '0');
INSERT INTO `familiars` VALUES ('3923', '30078', '9970031', '', '1', '0', '2', '853', '20027', '20013', '10030', '0');
INSERT INTO `familiars` VALUES ('3924', '30078', '9970004', '', '1', '0', '1', '892', '10002', '10028', '10024', '0');
INSERT INTO `familiars` VALUES ('3925', '30078', '9970076', '', '1', '0', '1', '825', '10028', '10001', '10013', '0');
INSERT INTO `familiars` VALUES ('3926', '30078', '9970168', '', '1', '0', '2', '813', '20010', '10025', '10041', '0');
INSERT INTO `familiars` VALUES ('3927', '30078', '9970155', '', '1', '0', '2', '846', '20010', '20017', '10020', '0');
INSERT INTO `familiars` VALUES ('3928', '30078', '9970052', '', '1', '0', '0', '825', '2', '14', '16', '0');
INSERT INTO `familiars` VALUES ('3929', '30078', '9970072', '', '1', '0', '1', '802', '10007', '7', '10026', '0');
INSERT INTO `familiars` VALUES ('3930', '30078', '9970064', '', '1', '0', '0', '857', '13', '17', '6', '0');
INSERT INTO `familiars` VALUES ('3931', '30078', '9970169', '', '1', '0', '0', '905', '11', '7', '11', '0');
INSERT INTO `familiars` VALUES ('3932', '30078', '9970170', '', '1', '0', '0', '836', '2', '13', '13', '0');
INSERT INTO `familiars` VALUES ('3933', '30078', '9970079', '', '1', '0', '0', '830', '17', '6', '18', '0');
INSERT INTO `familiars` VALUES ('3934', '30078', '9970101', '', '1', '0', '0', '888', '14', '7', '19', '0');
INSERT INTO `familiars` VALUES ('3935', '30078', '9970139', '', '1', '0', '2', '842', '20033', '10003', '10039', '0');
INSERT INTO `familiars` VALUES ('3936', '30078', '9970129', '', '1', '0', '0', '864', '4', '11', '11', '0');
INSERT INTO `familiars` VALUES ('3937', '30078', '9970126', '', '1', '0', '1', '890', '10024', '14', '10007', '0');
INSERT INTO `familiars` VALUES ('3938', '30078', '9970020', '', '1', '0', '1', '858', '10025', '10025', '10031', '0');
INSERT INTO `familiars` VALUES ('3939', '30078', '9970130', '', '1', '0', '1', '890', '10007', '9', '1', '0');
INSERT INTO `familiars` VALUES ('3940', '30078', '9970042', '', '1', '0', '0', '890', '4', '11', '18', '0');
INSERT INTO `familiars` VALUES ('3941', '30078', '9970001', '', '1', '0', '2', '860', '20012', '20012', '10001', '0');
INSERT INTO `familiars` VALUES ('3942', '30078', '9970159', '', '1', '0', '1', '855', '10035', '10034', '10005', '0');
INSERT INTO `familiars` VALUES ('3943', '30078', '9970079', '', '1', '0', '2', '887', '20032', '10016', '10032', '0');
INSERT INTO `familiars` VALUES ('3944', '30078', '9970085', '', '1', '0', '1', '803', '10020', '7', '10034', '0');
INSERT INTO `familiars` VALUES ('3945', '30078', '9970033', '', '1', '0', '1', '885', '10007', '10004', '10006', '0');
INSERT INTO `familiars` VALUES ('3946', '30078', '9970154', '', '1', '0', '0', '806', '16', '18', '12', '0');
INSERT INTO `familiars` VALUES ('3947', '30078', '9970153', '', '1', '0', '0', '834', '12', '11', '7', '0');
INSERT INTO `familiars` VALUES ('3948', '30078', '9970003', '', '1', '0', '0', '842', '16', '3', '18', '0');
INSERT INTO `familiars` VALUES ('3970', '30077', '9970112', '', '1', '0', '1', '901', '15', '14', '7', '0');
INSERT INTO `familiars` VALUES ('3971', '30077', '9970142', '', '1', '0', '1', '808', '10036', '10004', '10043', '0');
INSERT INTO `familiars` VALUES ('3972', '30077', '9970161', '', '1', '0', '1', '875', '13', '19', '18', '0');
INSERT INTO `familiars` VALUES ('4265', '30090', '9970169', '', '1', '0', '4', '899', '40012', '30017', '30008', '0');
INSERT INTO `familiars` VALUES ('4266', '30090', '9970209', '', '5', '0', '4', '852', '40022', '30026', '30028', '1');
INSERT INTO `familiars` VALUES ('4267', '30090', '9970076', '', '5', '0', '4', '822', '40026', '30033', '30020', '0');

-- ----------------------------
-- Table structure for `families`
-- ----------------------------
DROP TABLE IF EXISTS `families`;
CREATE TABLE `families` (
  `familyid` int(11) NOT NULL AUTO_INCREMENT,
  `leaderid` int(11) NOT NULL DEFAULT '0',
  `notice` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`familyid`),
  KEY `familyid` (`familyid`),
  KEY `leaderid` (`leaderid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of families
-- ----------------------------

-- ----------------------------
-- Table structure for `general_data`
-- ----------------------------
DROP TABLE IF EXISTS `general_data`;
CREATE TABLE `general_data` (
  `key` varchar(255) CHARACTER SET utf8 NOT NULL,
  `value` longtext CHARACTER SET utf8,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of general_data
-- ----------------------------

-- ----------------------------
-- Table structure for `gifts`
-- ----------------------------
DROP TABLE IF EXISTS `gifts`;
CREATE TABLE `gifts` (
  `giftid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `recipient` int(11) NOT NULL DEFAULT '0',
  `from` varchar(13) NOT NULL DEFAULT '',
  `message` varchar(255) NOT NULL DEFAULT '',
  `sn` int(11) NOT NULL DEFAULT '0',
  `uniqueid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`giftid`),
  KEY `recipient` (`recipient`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gifts
-- ----------------------------

-- ----------------------------
-- Table structure for `gmlog`
-- ----------------------------
DROP TABLE IF EXISTS `gmlog`;
CREATE TABLE `gmlog` (
  `gmlogid` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NOT NULL DEFAULT '0',
  `name` varchar(13) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `command` text NOT NULL,
  `mapid` int(11) NOT NULL DEFAULT '0',
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`gmlogid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gmlog
-- ----------------------------

-- ----------------------------
-- Table structure for `guilds`
-- ----------------------------
DROP TABLE IF EXISTS `guilds`;
CREATE TABLE `guilds` (
  `guildid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `world` int(10) NOT NULL DEFAULT '0',
  `leader` int(10) unsigned NOT NULL DEFAULT '0',
  `GP` int(11) NOT NULL DEFAULT '0',
  `imageLogo` varbinary(60000) NULL DEFAULT NULL,
  `logo` int(10) unsigned DEFAULT NULL,
  `logoColor` smallint(5) unsigned NOT NULL DEFAULT '0',
  `name` varchar(45) NOT NULL,
  `rank1title` varchar(45) NOT NULL DEFAULT '公會長',
  `rank2title` varchar(45) NOT NULL DEFAULT '公會副會長',
  `rank3title` varchar(45) NOT NULL DEFAULT '公會成員1',
  `rank4title` varchar(45) NOT NULL DEFAULT '公會成員2',
  `rank5title` varchar(45) NOT NULL DEFAULT '公會成員3',
  `rank6title` varchar(45) NOT NULL DEFAULT '',
  `rank7title` varchar(45) NOT NULL DEFAULT '',
  `rank8title` varchar(45) NOT NULL DEFAULT '',
  `rank9title` varchar(45) NOT NULL DEFAULT '',
  `rank10title` varchar(45) NOT NULL DEFAULT '',
  `rank1authority` int(10) NOT NULL DEFAULT -1,
  `rank2authority` int(10) NOT NULL DEFAULT 1663,
  `rank3authority` int(10) NOT NULL DEFAULT 1024,
  `rank4authority` int(10) NOT NULL DEFAULT 1024,
  `rank5authority` int(10) NOT NULL DEFAULT 1024,
  `rank6authority` int(10) NOT NULL DEFAULT 1024,
  `rank7authority` int(10) NOT NULL DEFAULT 1024,
  `rank8authority` int(10) NOT NULL DEFAULT 1024,
  `rank9authority` int(10) NOT NULL DEFAULT 1024,
  `rank10authority` int(10) NOT NULL DEFAULT 1024,
  `capacity` int(10) unsigned NOT NULL DEFAULT '10',
  `logoBG` int(10) unsigned DEFAULT NULL,
  `logoBGColor` smallint(5) unsigned NOT NULL DEFAULT '0',
  `notice` varchar(101) DEFAULT NULL,
  `signature` int(11) NOT NULL DEFAULT '0',
  `alliance` int(10) unsigned NOT NULL DEFAULT '0',
  `allow_join` smallint(1) NOT NULL DEFAULT 1,
  `activities` int(10) NOT NULL DEFAULT 0,
  `online_time` int(10) NOT NULL DEFAULT 0,
  `age` int(10) NOT NULL DEFAULT 0,
  PRIMARY KEY (`guildid`),
  UNIQUE KEY `name` (`name`),
  KEY `guildid` (`guildid`),
  KEY `leader` (`leader`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of guilds
-- ----------------------------

-- ----------------------------
-- Table structure for `guildskills`
-- ----------------------------
DROP TABLE IF EXISTS `guildskills`;
CREATE TABLE `guildskills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `guildid` int(11) NOT NULL DEFAULT '0',
  `skillid` int(11) NOT NULL DEFAULT '0',
  `level` smallint(3) NOT NULL DEFAULT '1',
  `timestamp` bigint(20) NOT NULL DEFAULT '0',
  `purchaser` varchar(13) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of guildskills
-- ----------------------------

-- ----------------------------
-- Table structure for `hacker`
-- ----------------------------
DROP TABLE IF EXISTS `hacker`;
CREATE TABLE `hacker` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `md5` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hacker
-- ----------------------------

-- ----------------------------
-- Table structure for `hiredfisher`
-- ----------------------------
DROP TABLE IF EXISTS `hiredfisher`;
CREATE TABLE `hiredfisher` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL DEFAULT '0',
  `mesos` bigint(20) NOT NULL DEFAULT '0',
  `exp` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hiredfisher
-- ----------------------------

-- ----------------------------
-- Table structure for `hiredmerch`
-- ----------------------------
DROP TABLE IF EXISTS `hiredmerch`;
CREATE TABLE `hiredmerch` (
  `PackageId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `characterid` int(10) unsigned DEFAULT '0',
  `accountid` int(10) unsigned DEFAULT NULL,
  `Mesos` bigint(20) unsigned DEFAULT '0',
  `map` int(10) DEFAULT NULL,
  `channel` int(10) DEFAULT NULL,
  `time` bigint(20) unsigned DEFAULT NULL,
  PRIMARY KEY (`PackageId`),
  KEY `characterid` (`characterid`) USING BTREE,
  KEY `accountid` (`accountid`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hiredmerch
-- ----------------------------

-- ----------------------------
-- Table structure for `hypay`
-- ----------------------------
DROP TABLE IF EXISTS `hypay`;
CREATE TABLE `hypay` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accname` varchar(25) NOT NULL DEFAULT '',
  `pay` int(11) NOT NULL DEFAULT '0',
  `payUsed` int(11) NOT NULL DEFAULT '0',
  `payReward` int(11) NOT NULL DEFAULT '0',
  `payonleid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `accname` (`accname`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hypay
-- ----------------------------

-- ----------------------------
-- Table structure for `imps`
-- ----------------------------
DROP TABLE IF EXISTS `imps`;
CREATE TABLE `imps` (
  `impid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL DEFAULT '0',
  `itemid` int(11) NOT NULL DEFAULT '0',
  `level` tinyint(3) unsigned NOT NULL DEFAULT '1',
  `state` tinyint(3) unsigned NOT NULL DEFAULT '1',
  `closeness` mediumint(6) unsigned NOT NULL DEFAULT '0',
  `fullness` mediumint(6) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`impid`),
  KEY `impid` (`impid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of imps
-- ----------------------------

-- ----------------------------
-- Table structure for `innerskills`
-- ----------------------------
DROP TABLE IF EXISTS `innerskills`;
CREATE TABLE `innerskills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `skillid` int(11) NOT NULL DEFAULT '0',
  `characterid` int(11) NOT NULL DEFAULT '0',
  `skilllevel` int(11) NOT NULL DEFAULT '0',
  `position` tinyint(4) NOT NULL DEFAULT '1',
  `rank` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `innerskills_ibfk_1` (`characterid`),
  CONSTRAINT `innerskills_ibfk_1` FOREIGN KEY (`characterid`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of innerskills
-- ----------------------------

-- ----------------------------
-- Table structure for `internlog`
-- ----------------------------
DROP TABLE IF EXISTS `internlog`;
CREATE TABLE `internlog` (
  `gmlogid` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NOT NULL DEFAULT '0',
  `name` varchar(13) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `command` tinytext NOT NULL,
  `mapid` int(11) NOT NULL DEFAULT '0',
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`gmlogid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of internlog
-- ----------------------------

-- ----------------------------
-- Table structure for `inventoryequipment`
-- ----------------------------
DROP TABLE IF EXISTS `inventoryequipment`;
CREATE TABLE `inventoryequipment` (
  `inventoryequipmentid` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `inventoryitemid` bigint(20) unsigned NOT NULL DEFAULT '0',
  `upgradeslots` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `level` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `str` smallint(6) NOT NULL DEFAULT '0',
  `dex` smallint(6) NOT NULL DEFAULT '0',
  `int` smallint(6) NOT NULL DEFAULT '0',
  `luk` smallint(6) NOT NULL DEFAULT '0',
  `hp` smallint(6) NOT NULL DEFAULT '0',
  `mp` smallint(6) NOT NULL DEFAULT '0',
  `watk` smallint(6) NOT NULL DEFAULT '0',
  `matk` smallint(6) NOT NULL DEFAULT '0',
  `wdef` smallint(6) NOT NULL DEFAULT '0',
  `mdef` smallint(6) NOT NULL DEFAULT '0',
  `acc` smallint(6) NOT NULL DEFAULT '0',
  `avoid` smallint(6) NOT NULL DEFAULT '0',
  `hands` smallint(6) NOT NULL DEFAULT '0',
  `speed` smallint(6) NOT NULL DEFAULT '0',
  `jump` smallint(6) NOT NULL DEFAULT '0',
  `ViciousHammer` tinyint(2) NOT NULL DEFAULT '0',
  `PlatinumHammer` tinyint(2) NOT NULL DEFAULT '0',
  `itemEXP` bigint(20) NOT NULL DEFAULT '0',
  `durability` mediumint(9) NOT NULL DEFAULT '-1',
  `state` tinyint(3) NOT NULL,
  `starForce` tinyint(3) NOT NULL DEFAULT '0',
  `potential1` int(11) NOT NULL DEFAULT '0',
  `potential2` int(11) NOT NULL DEFAULT '0',
  `potential3` int(11) NOT NULL DEFAULT '0',
  `addState` tinyint(3) NOT NULL DEFAULT '0',
  `potential4` int(11) NOT NULL DEFAULT '0',
  `potential5` int(11) NOT NULL DEFAULT '0',
  `potential6` int(11) NOT NULL DEFAULT '0',
  `incSkill` int(11) NOT NULL DEFAULT '-1',
  `charmEXP` smallint(6) NOT NULL DEFAULT '-1',
  `pvpDamage` smallint(6) NOT NULL DEFAULT '0',
  `statemsg` int(11) NOT NULL DEFAULT '0',
  `itemSlot1` int(11) NOT NULL DEFAULT '-1',
  `itemSlot2` int(11) NOT NULL DEFAULT '-1',
  `itemSlot3` int(11) NOT NULL DEFAULT '-1',
  `itemSkin` int(11) NOT NULL DEFAULT '0',
  `limitBreak` bigint(22) NOT NULL DEFAULT '0',
  `enhanctBuff` int(6) NOT NULL DEFAULT '0' COMMENT '強化效果 0x01 0x02 0x04',
  `reqLevel` int(3) NOT NULL DEFAULT '0' COMMENT '穿戴裝備的等級要求提高',
  `yggdrasilWisdom` int(3) NOT NULL DEFAULT '0' COMMENT '什麼卷軸效果',
  `finalStrike` int(3) NOT NULL DEFAULT '0' COMMENT '最終一擊卷軸成功',
  `bossDamage` int(3) NOT NULL DEFAULT '0' COMMENT 'BOSS傷害百分比',
  `ignorePDR` int(3) NOT NULL DEFAULT '0' COMMENT '無視怪物防禦百分比',
  `totalDamage` int(3) NOT NULL DEFAULT '0' COMMENT '總傷害百分比增加',
  `allStat` int(3) NOT NULL DEFAULT '0' COMMENT '所有屬性百分比增加',
  `karmaCount` int(3) NOT NULL DEFAULT '-1' COMMENT '可以使用剪刀多少次',
  `nirvanaFlame` bigint(20) NOT NULL DEFAULT '0',
  `sealedlevel` tinyint(1) NOT NULL,
  `sealedExp` bigint(20) NOT NULL,
  `soulname` int(3) NOT NULL DEFAULT '0',
  `soulenchanter` tinyint(1) NOT NULL DEFAULT '0',
  `soulpotential` int(11) NOT NULL DEFAULT '0',
  `soulskill` int(11) NOT NULL DEFAULT '0',
  `arc` smallint(6) NOT NULL DEFAULT '0',
  `arcexp` int(6) NOT NULL DEFAULT '0',
  `arclevel` smallint(6) NOT NULL DEFAULT '0',
  `aut` smallint(6) NOT NULL DEFAULT '0',
  `autexp` int(6) NOT NULL DEFAULT '0',
  `autlevel` smallint(6) NOT NULL DEFAULT '0',
  `mvpEquip` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`inventoryequipmentid`),
  KEY `inventoryitemid` (`inventoryitemid`),
  CONSTRAINT `inventoryequipment_ibfk_2` FOREIGN KEY (`inventoryitemid`) REFERENCES `inventoryitems` (`inventoryitemid`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of inventoryequipment
-- ----------------------------

-- ----------------------------
-- Table structure for `inventoryitems`
-- ----------------------------
DROP TABLE IF EXISTS `inventoryitems`;
CREATE TABLE `inventoryitems` (
  `inventoryitemid` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `type` tinyint(3) unsigned NOT NULL,
  `characterid` int(11) DEFAULT NULL,
  `accountid` int(11) DEFAULT NULL,
  `auction_id` bigint(20) DEFAULT NULL,
  `itemid` int(11) NOT NULL DEFAULT '0',
  `inventorytype` int(11) NOT NULL DEFAULT '0',
  `position` int(11) NOT NULL DEFAULT '0',
  `quantity` int(11) NOT NULL DEFAULT '0',
  `owner` tinytext,
  `GM_Log` tinytext,
  `sn` int(11) NOT NULL DEFAULT '-1',
  `flag` int(11) NOT NULL DEFAULT '0',
  `expiredate` bigint(20) NOT NULL DEFAULT '-1',
  `sender` varchar(13) NOT NULL DEFAULT '',
  `espos` int(11) NOT NULL DEFAULT '0',
  `extendSlot` int(11) NOT NULL DEFAULT '-1',
  PRIMARY KEY (`inventoryitemid`),
  KEY `FK_inventoryitems_1` (`characterid`) USING BTREE,
  KEY `FK_inventoryitems_2` (`accountid`),
  KEY `FK_inventoryitems_3` (`sn`) USING BTREE,
  KEY `auction_id` (`auction_id`,`type`) USING BTREE,
  CONSTRAINT `FK_inventoryitems_1` FOREIGN KEY (`characterid`) REFERENCES `characters` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_inventoryitems_2` FOREIGN KEY (`accountid`) REFERENCES `accounts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `inventoryitems_ibfk_4` FOREIGN KEY (`auction_id`) REFERENCES `auction` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of inventoryitems
-- ----------------------------

-- ----------------------------
-- Table structure for `inventorylog`
-- ----------------------------
DROP TABLE IF EXISTS `inventorylog`;
CREATE TABLE `inventorylog` (
  `inventorylogid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `inventoryitemid` int(10) unsigned NOT NULL DEFAULT '0',
  `msg` tinytext NOT NULL,
  PRIMARY KEY (`inventorylogid`),
  KEY `inventoryitemid` (`inventoryitemid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of inventorylog
-- ----------------------------

-- ----------------------------
-- Table structure for `inventoryslot`
-- ----------------------------
DROP TABLE IF EXISTS `inventoryslot`;
CREATE TABLE `inventoryslot` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `characters_id` int(10) NOT NULL DEFAULT '0',
  `equip` mediumint(8) NOT NULL DEFAULT '0',
  `use` mediumint(8) NOT NULL DEFAULT '0',
  `setup` mediumint(8) NOT NULL DEFAULT '0',
  `etc` mediumint(8) NOT NULL DEFAULT '0',
  `cash` mediumint(8) NOT NULL DEFAULT '0',
  `decoration` mediumint(8) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `characters_id` (`characters_id`),
  CONSTRAINT `inventoryslot_ibfk_1` FOREIGN KEY (`characters_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of inventoryslot
-- ----------------------------

-- ----------------------------
-- Table structure for `ipbans`
-- ----------------------------
DROP TABLE IF EXISTS `ipbans`;
CREATE TABLE `ipbans` (
  `ipbanid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ip` varchar(40) NOT NULL DEFAULT '',
  PRIMARY KEY (`ipbanid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of ipbans
-- ----------------------------

-- ----------------------------
-- Table structure for `ipvotelog`
-- ----------------------------
DROP TABLE IF EXISTS `ipvotelog`;
CREATE TABLE `ipvotelog` (
  `vid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `accid` int(11) NOT NULL DEFAULT '0',
  `ipaddress` varchar(30) NOT NULL DEFAULT '127.0.0.1',
  `votetime` bigint(20) NOT NULL DEFAULT '0',
  `votetype` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`vid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ipvotelog
-- ----------------------------

-- ----------------------------
-- Table structure for `itemsearch`
-- ----------------------------
DROP TABLE IF EXISTS `itemsearch`;
CREATE TABLE `itemsearch` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `itemid` int(11) NOT NULL DEFAULT '0',
  `count` int(11) NOT NULL DEFAULT '0',
  `itemName` tinytext,
  PRIMARY KEY (`id`),
  KEY `itemid` (`itemid`) USING BTREE,
  KEY `count` (`count`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of itemsearch
-- ----------------------------

-- ----------------------------
-- Table structure for `keymap`
-- ----------------------------
DROP TABLE IF EXISTS `keymap`;
CREATE TABLE `keymap` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL DEFAULT '0',
  `slot` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `key` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `type` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `action` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `keymap_ibfk_1` (`characterid`),
  CONSTRAINT `keymap_ibfk_1` FOREIGN KEY (`characterid`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of keymap
-- ----------------------------

-- ----------------------------
-- Table structure for `lovelog`
-- ----------------------------
DROP TABLE IF EXISTS `lovelog`;
CREATE TABLE `lovelog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL DEFAULT '0',
  `characterid_to` int(11) NOT NULL DEFAULT '0',
  `when` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `characterid` (`characterid`),
  CONSTRAINT `lovelog_ibfk_1` FOREIGN KEY (`characterid`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of lovelog
-- ----------------------------

-- ----------------------------
-- Table structure for `luckmoneydata`
-- ----------------------------
DROP TABLE IF EXISTS `luckmoneydata`;
CREATE TABLE `luckmoneydata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `luckmoneytype` int(11) DEFAULT NULL,
  `LuckyMoney` int(11) DEFAULT NULL,
  `AllowPeople` int(11) DEFAULT NULL,
  `used` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of luckmoneydata
-- ----------------------------
INSERT INTO `luckmoneydata` VALUES ('1', '0', '1111', '11', '0');
INSERT INTO `luckmoneydata` VALUES ('2', '0', '1111', '11', '0');

-- ----------------------------
-- Table structure for `macbans`
-- ----------------------------
DROP TABLE IF EXISTS `macbans`;
CREATE TABLE `macbans` (
  `macbanid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `mac` varchar(30) NOT NULL DEFAULT '00-00-00-00-00-00',
  PRIMARY KEY (`macbanid`),
  UNIQUE KEY `mac_2` (`mac`)
) ENGINE=MEMORY DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of macbans
-- ----------------------------

-- ----------------------------
-- Table structure for `macfilters`
-- ----------------------------
DROP TABLE IF EXISTS `macfilters`;
CREATE TABLE `macfilters` (
  `macfilterid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `filter` varchar(30) NOT NULL,
  PRIMARY KEY (`macfilterid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of macfilters
-- ----------------------------

-- ----------------------------
-- Table structure for `mapleunion`
-- ----------------------------
DROP TABLE IF EXISTS `mapleunion`;
CREATE TABLE `mapleunion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accounts_id` int(11) NOT NULL,
  `world` int(11) NOT NULL,
  `characters_id` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `rotate` int(11) NOT NULL,
  `boardindex` int(11) NOT NULL,
  `local` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `accounts_id` (`accounts_id`),
  KEY `characters_id` (`characters_id`),
  CONSTRAINT `mapleunion_ibfk_1` FOREIGN KEY (`accounts_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `mapleunion_ibfk_2` FOREIGN KEY (`characters_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mapleunion
-- ----------------------------

-- ----------------------------
-- Table structure for `memoryskills`
-- ----------------------------
DROP TABLE IF EXISTS `memoryskills`;
CREATE TABLE `memoryskills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `skillid` int(11) NOT NULL DEFAULT '0',
  `comments` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of memoryskills
-- ----------------------------
INSERT INTO `memoryskills` VALUES ('1', '2001002', null);
INSERT INTO `memoryskills` VALUES ('2', '2001008', null);
INSERT INTO `memoryskills` VALUES ('3', '2221007', null);
INSERT INTO `memoryskills` VALUES ('4', '2221011', null);
INSERT INTO `memoryskills` VALUES ('5', '2221006', null);
INSERT INTO `memoryskills` VALUES ('6', '2221012', null);
INSERT INTO `memoryskills` VALUES ('7', '2211008', null);
INSERT INTO `memoryskills` VALUES ('8', '2211010', null);
INSERT INTO `memoryskills` VALUES ('9', '2211012', null);
INSERT INTO `memoryskills` VALUES ('10', '2211002', null);
INSERT INTO `memoryskills` VALUES ('11', '2201001', null);
INSERT INTO `memoryskills` VALUES ('12', '2201005', null);
INSERT INTO `memoryskills` VALUES ('13', '2201008', null);
INSERT INTO `memoryskills` VALUES ('14', '2321006', null);
INSERT INTO `memoryskills` VALUES ('15', '2321007', null);
INSERT INTO `memoryskills` VALUES ('16', '2321008', null);
INSERT INTO `memoryskills` VALUES ('17', '2321001', null);
INSERT INTO `memoryskills` VALUES ('18', '2321005', null);
INSERT INTO `memoryskills` VALUES ('19', '2311001', null);
INSERT INTO `memoryskills` VALUES ('20', '2311002', null);
INSERT INTO `memoryskills` VALUES ('21', '2311011', null);
INSERT INTO `memoryskills` VALUES ('22', '2311003', null);
INSERT INTO `memoryskills` VALUES ('23', '2311012', null);
INSERT INTO `memoryskills` VALUES ('24', '2311004', null);
INSERT INTO `memoryskills` VALUES ('25', '2301005', null);
INSERT INTO `memoryskills` VALUES ('26', '2301002', null);
INSERT INTO `memoryskills` VALUES ('27', '2301003', null);
INSERT INTO `memoryskills` VALUES ('28', '2301004', null);
INSERT INTO `memoryskills` VALUES ('29', '4001003', null);
INSERT INTO `memoryskills` VALUES ('30', '4001005', null);
INSERT INTO `memoryskills` VALUES ('31', '4001344', null);
INSERT INTO `memoryskills` VALUES ('32', '4001334', null);
INSERT INTO `memoryskills` VALUES ('33', '4121014', null);
INSERT INTO `memoryskills` VALUES ('34', '4121016', null);
INSERT INTO `memoryskills` VALUES ('35', '4121013', null);
INSERT INTO `memoryskills` VALUES ('36', '4121015', null);
INSERT INTO `memoryskills` VALUES ('37', '4121017', null);
INSERT INTO `memoryskills` VALUES ('38', '4111015', null);
INSERT INTO `memoryskills` VALUES ('39', '4111003', null);
INSERT INTO `memoryskills` VALUES ('40', '4111010', null);
INSERT INTO `memoryskills` VALUES ('41', '4101008', null);
INSERT INTO `memoryskills` VALUES ('42', '4101010', null);
INSERT INTO `memoryskills` VALUES ('43', '4221007', null);
INSERT INTO `memoryskills` VALUES ('44', '4221010', null);
INSERT INTO `memoryskills` VALUES ('45', '4221013', null);
INSERT INTO `memoryskills` VALUES ('46', '4221014', null);
INSERT INTO `memoryskills` VALUES ('47', '4211011', null);
INSERT INTO `memoryskills` VALUES ('48', '4211002', null);
INSERT INTO `memoryskills` VALUES ('49', '4211003', null);
INSERT INTO `memoryskills` VALUES ('50', '4211006', null);
INSERT INTO `memoryskills` VALUES ('51', '4201004', null);
INSERT INTO `memoryskills` VALUES ('52', '4201009', null);
INSERT INTO `memoryskills` VALUES ('53', '4201011', null);
INSERT INTO `memoryskills` VALUES ('54', '4201012', null);
INSERT INTO `memoryskills` VALUES ('55', '4341002', null);
INSERT INTO `memoryskills` VALUES ('56', '4341004', null);
INSERT INTO `memoryskills` VALUES ('57', '4341007', null);
INSERT INTO `memoryskills` VALUES ('58', '4341009', null);
INSERT INTO `memoryskills` VALUES ('59', '4341011', null);
INSERT INTO `memoryskills` VALUES ('60', '4331011', null);
INSERT INTO `memoryskills` VALUES ('61', '4331006', null);
INSERT INTO `memoryskills` VALUES ('62', '4321002', null);
INSERT INTO `memoryskills` VALUES ('63', '4321004', null);
INSERT INTO `memoryskills` VALUES ('64', '4321006', null);
INSERT INTO `memoryskills` VALUES ('65', '4311003', null);
INSERT INTO `memoryskills` VALUES ('66', '4311005', null);
INSERT INTO `memoryskills` VALUES ('67', '4311002', null);
INSERT INTO `memoryskills` VALUES ('68', '4301004', null);
INSERT INTO `memoryskills` VALUES ('69', '4301003', null);
INSERT INTO `memoryskills` VALUES ('70', '1001005', null);
INSERT INTO `memoryskills` VALUES ('71', '1001003', null);
INSERT INTO `memoryskills` VALUES ('72', '1121016', null);
INSERT INTO `memoryskills` VALUES ('73', '1111008', null);
INSERT INTO `memoryskills` VALUES ('74', '1111010', null);
INSERT INTO `memoryskills` VALUES ('75', '1111012', null);
INSERT INTO `memoryskills` VALUES ('76', '1101011', null);
INSERT INTO `memoryskills` VALUES ('77', '1101006', null);
INSERT INTO `memoryskills` VALUES ('78', '1321012', null);
INSERT INTO `memoryskills` VALUES ('79', '1321014', null);
INSERT INTO `memoryskills` VALUES ('80', '1321013', null);
INSERT INTO `memoryskills` VALUES ('81', '1311015', null);
INSERT INTO `memoryskills` VALUES ('82', '1311011', null);
INSERT INTO `memoryskills` VALUES ('83', '1311012', null);
INSERT INTO `memoryskills` VALUES ('84', '1301006', null);
INSERT INTO `memoryskills` VALUES ('85', '1301007', null);
INSERT INTO `memoryskills` VALUES ('86', '1301011', null);
INSERT INTO `memoryskills` VALUES ('87', '1301012', null);
INSERT INTO `memoryskills` VALUES ('88', '1221009', null);
INSERT INTO `memoryskills` VALUES ('89', '1221011', null);
INSERT INTO `memoryskills` VALUES ('90', '1221015', null);
INSERT INTO `memoryskills` VALUES ('91', '1221004', null);
INSERT INTO `memoryskills` VALUES ('92', '1221014', null);
INSERT INTO `memoryskills` VALUES ('93', '1221016', null);
INSERT INTO `memoryskills` VALUES ('94', '1211011', null);
INSERT INTO `memoryskills` VALUES ('95', '1211013', null);
INSERT INTO `memoryskills` VALUES ('96', '1201013', null);
INSERT INTO `memoryskills` VALUES ('97', '1211014', null);
INSERT INTO `memoryskills` VALUES ('98', '1211008', null);
INSERT INTO `memoryskills` VALUES ('99', '1211010', null);
INSERT INTO `memoryskills` VALUES ('100', '1201011', null);
INSERT INTO `memoryskills` VALUES ('101', '1201012', null);
INSERT INTO `memoryskills` VALUES ('102', '5001002', null);
INSERT INTO `memoryskills` VALUES ('103', '5001003', null);
INSERT INTO `memoryskills` VALUES ('104', '5121010', null);
INSERT INTO `memoryskills` VALUES ('105', '5121001', null);
INSERT INTO `memoryskills` VALUES ('106', '5121007', null);
INSERT INTO `memoryskills` VALUES ('107', '5121009', null);
INSERT INTO `memoryskills` VALUES ('108', '5121013', null);
INSERT INTO `memoryskills` VALUES ('109', '5121015', null);
INSERT INTO `memoryskills` VALUES ('110', '5111009', null);
INSERT INTO `memoryskills` VALUES ('111', '5111007', null);
INSERT INTO `memoryskills` VALUES ('112', '5111010', null);
INSERT INTO `memoryskills` VALUES ('113', '5111012', null);
INSERT INTO `memoryskills` VALUES ('114', '5101004', null);
INSERT INTO `memoryskills` VALUES ('115', '5101012', null);
INSERT INTO `memoryskills` VALUES ('116', '5101011', null);
INSERT INTO `memoryskills` VALUES ('117', '5221018', null);
INSERT INTO `memoryskills` VALUES ('118', '5221016', null);
INSERT INTO `memoryskills` VALUES ('119', '5221004', null);
INSERT INTO `memoryskills` VALUES ('120', '5221022', null);
INSERT INTO `memoryskills` VALUES ('121', '5221021', null);
INSERT INTO `memoryskills` VALUES ('122', '5221017', null);
INSERT INTO `memoryskills` VALUES ('123', '5221015', null);
INSERT INTO `memoryskills` VALUES ('124', '5221013', null);
INSERT INTO `memoryskills` VALUES ('125', '5211008', null);
INSERT INTO `memoryskills` VALUES ('126', '5211010', null);
INSERT INTO `memoryskills` VALUES ('127', '5211007', null);
INSERT INTO `memoryskills` VALUES ('128', '5201001', null);
INSERT INTO `memoryskills` VALUES ('129', '3121002', null);
INSERT INTO `memoryskills` VALUES ('130', '3121014', null);
INSERT INTO `memoryskills` VALUES ('131', '3121020', null);
INSERT INTO `memoryskills` VALUES ('132', '3121015', null);
INSERT INTO `memoryskills` VALUES ('133', '3111011', null);
INSERT INTO `memoryskills` VALUES ('134', '3111013', null);
INSERT INTO `memoryskills` VALUES ('135', '3111003', null);
INSERT INTO `memoryskills` VALUES ('136', '3101005', null);
INSERT INTO `memoryskills` VALUES ('137', '3001004', null);
INSERT INTO `memoryskills` VALUES ('138', '3221014', null);
INSERT INTO `memoryskills` VALUES ('139', '3221007', null);
INSERT INTO `memoryskills` VALUES ('140', '3221017', null);
INSERT INTO `memoryskills` VALUES ('141', '3221002', null);
INSERT INTO `memoryskills` VALUES ('142', '3211011', null);
INSERT INTO `memoryskills` VALUES ('143', '3211012', null);
INSERT INTO `memoryskills` VALUES ('144', '3211008', null);
INSERT INTO `memoryskills` VALUES ('145', '3211009', null);
INSERT INTO `memoryskills` VALUES ('146', '3210001', null);
INSERT INTO `memoryskills` VALUES ('147', '3201008', null);
INSERT INTO `memoryskills` VALUES ('148', '2101004', null);
INSERT INTO `memoryskills` VALUES ('149', '2101005', null);
INSERT INTO `memoryskills` VALUES ('150', '2101001', null);
INSERT INTO `memoryskills` VALUES ('151', '2111002', null);
INSERT INTO `memoryskills` VALUES ('152', '2111003', null);
INSERT INTO `memoryskills` VALUES ('153', '2111011', null);
INSERT INTO `memoryskills` VALUES ('154', '2111008', null);
INSERT INTO `memoryskills` VALUES ('155', '2121003', null);
INSERT INTO `memoryskills` VALUES ('156', '2121006', null);
INSERT INTO `memoryskills` VALUES ('157', '2121007', null);
INSERT INTO `memoryskills` VALUES ('158', '5011001', null);
INSERT INTO `memoryskills` VALUES ('159', '5011000', null);
INSERT INTO `memoryskills` VALUES ('160', '5301003', null);
INSERT INTO `memoryskills` VALUES ('161', '5301000', null);
INSERT INTO `memoryskills` VALUES ('162', '5301001', null);
INSERT INTO `memoryskills` VALUES ('163', '5311005', null);
INSERT INTO `memoryskills` VALUES ('164', '5311000', null);
INSERT INTO `memoryskills` VALUES ('165', '5311010', null);
INSERT INTO `memoryskills` VALUES ('166', '5321001', null);
INSERT INTO `memoryskills` VALUES ('167', '5321010', null);
INSERT INTO `memoryskills` VALUES ('168', '5321000', null);
INSERT INTO `memoryskills` VALUES ('169', '5321012', null);
INSERT INTO `memoryskills` VALUES ('170', '1121054', null);
INSERT INTO `memoryskills` VALUES ('171', '1221054', null);
INSERT INTO `memoryskills` VALUES ('172', '1321054', null);
INSERT INTO `memoryskills` VALUES ('173', '2121054', null);
INSERT INTO `memoryskills` VALUES ('174', '2221054', null);
INSERT INTO `memoryskills` VALUES ('175', '2321054', null);
INSERT INTO `memoryskills` VALUES ('176', '3121054', null);
INSERT INTO `memoryskills` VALUES ('177', '3221054', null);
INSERT INTO `memoryskills` VALUES ('178', '4121054', null);
INSERT INTO `memoryskills` VALUES ('179', '4221054', null);
INSERT INTO `memoryskills` VALUES ('180', '5121054', null);
INSERT INTO `memoryskills` VALUES ('181', '5221054', null);

-- ----------------------------
-- Table structure for `memory_mentorships_students`
-- ----------------------------
DROP TABLE IF EXISTS `memory_mentorships_students`;
CREATE TABLE `memory_mentorships_students` (
  `charid` int(11) NOT NULL,
  `teacherid` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `createtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`charid`),
  KEY `tidAndStatus` (`teacherid`,`status`) USING BTREE,
  KEY `teacherId` (`teacherid`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of memory_mentorships_students
-- ----------------------------

-- ----------------------------
-- Table structure for `memory_mentorships_teachers`
-- ----------------------------
DROP TABLE IF EXISTS `memory_mentorships_teachers`;
CREATE TABLE `memory_mentorships_teachers` (
  `charid` int(11) NOT NULL,
  `exp` int(11) NOT NULL DEFAULT '0',
  `level` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`charid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of memory_mentorships_teachers
-- ----------------------------
INSERT INTO `memory_mentorships_teachers` VALUES ('20', '0', '0');

-- ----------------------------
-- Table structure for `missionlist`
-- ----------------------------
DROP TABLE IF EXISTS `missionlist`;
CREATE TABLE `missionlist` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `missionid` int(11) NOT NULL DEFAULT '0',
  `missionname` varchar(250) CHARACTER SET utf8 DEFAULT '',
  `minlevel` int(11) NOT NULL DEFAULT '-1',
  `maxlevel` int(11) NOT NULL DEFAULT '-1',
  `joblist` varchar(250) DEFAULT 'all',
  `itemlist` varchar(250) DEFAULT 'none',
  `prelist` varchar(250) DEFAULT 'none',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of missionlist
-- ----------------------------

-- ----------------------------
-- Table structure for `missionstatus`
-- ----------------------------
DROP TABLE IF EXISTS `missionstatus`;
CREATE TABLE `missionstatus` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `missionid` int(11) NOT NULL DEFAULT '0',
  `charid` int(11) NOT NULL DEFAULT '0',
  `repeat` int(1) NOT NULL DEFAULT '0',
  `repeattime` int(11) NOT NULL DEFAULT '0',
  `lockmap` int(1) NOT NULL DEFAULT '0',
  `finish` int(1) NOT NULL DEFAULT '0',
  `lastdate` timestamp NOT NULL DEFAULT '2008-08-08 08:08:08',
  `times` int(11) NOT NULL DEFAULT '0',
  `exp` int(11) NOT NULL DEFAULT '0',
  `mobid` int(11) NOT NULL DEFAULT '0',
  `minnum` int(11) NOT NULL DEFAULT '0',
  `maxnum` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of missionstatus
-- ----------------------------

-- ----------------------------
-- Table structure for `mountdata`
-- ----------------------------
DROP TABLE IF EXISTS `mountdata`;
CREATE TABLE `mountdata` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `characterid` int(10) unsigned DEFAULT NULL,
  `Level` int(3) unsigned NOT NULL DEFAULT '0',
  `Exp` int(10) unsigned NOT NULL DEFAULT '0',
  `Fatigue` int(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `characterid` (`characterid`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mountdata
-- ----------------------------

-- ----------------------------
-- Table structure for `mts_cart`
-- ----------------------------
DROP TABLE IF EXISTS `mts_cart`;
CREATE TABLE `mts_cart` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL DEFAULT '0',
  `itemid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `characterid` (`characterid`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of mts_cart
-- ----------------------------

-- ----------------------------
-- Table structure for `mts_items`
-- ----------------------------
DROP TABLE IF EXISTS `mts_items`;
CREATE TABLE `mts_items` (
  `id` int(11) NOT NULL,
  `tab` tinyint(1) NOT NULL DEFAULT '1',
  `price` int(11) NOT NULL DEFAULT '0',
  `characterid` int(11) NOT NULL DEFAULT '0',
  `seller` varchar(13) NOT NULL DEFAULT '',
  `expiration` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of mts_items
-- ----------------------------

-- ----------------------------
-- Table structure for `nxcode`
-- ----------------------------
DROP TABLE IF EXISTS `nxcode`;
CREATE TABLE `nxcode` (
  `code` varchar(30) NOT NULL,
  `valid` int(11) NOT NULL DEFAULT '1',
  `type` int(11) NOT NULL DEFAULT '0',
  `item` int(11) NOT NULL DEFAULT '10000',
  `user` varchar(13) DEFAULT NULL,
  `time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nxcode
-- ----------------------------

-- ----------------------------
-- Table structure for `parttime`
-- ----------------------------
DROP TABLE IF EXISTS `parttime`;
CREATE TABLE `parttime` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NOT NULL,
  `job` tinyint(1) NOT NULL DEFAULT '0',
  `time` bigint(20) NOT NULL DEFAULT '0',
  `reward` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of parttime
-- ----------------------------
INSERT INTO `parttime` VALUES ('2', '30054', '0', '1495543298681', '0');

-- ----------------------------
-- Table structure for `paylog`
-- ----------------------------
DROP TABLE IF EXISTS `paylog`;
CREATE TABLE `paylog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(20) CHARACTER SET utf8 NOT NULL,
  `points` int(11) NOT NULL,
  `rmb` int(11) NOT NULL,
  `paytime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of paylog
-- ----------------------------

-- ----------------------------
-- Table structure for `pets`
-- ----------------------------
DROP TABLE IF EXISTS `pets`;
CREATE TABLE `pets` (
  `petid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(13) DEFAULT NULL,
  `level` int(3) unsigned NOT NULL,
  `closeness` int(6) unsigned NOT NULL,
  `fullness` int(3) unsigned NOT NULL,
  `seconds` int(11) NOT NULL DEFAULT '0',
  `flags` smallint(5) NOT NULL DEFAULT '0',
  `excluded` varchar(255) NOT NULL DEFAULT '0,0,0,0,0,0,0,0,0,0',
  `color` int(4) NOT NULL DEFAULT '-1',
  `addSkill` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`petid`),
  KEY `petid` (`petid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of pets
-- ----------------------------

-- ----------------------------
-- Table structure for `playernpcs`
-- ----------------------------
DROP TABLE IF EXISTS `playernpcs`;
CREATE TABLE `playernpcs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(13) NOT NULL,
  `hair` int(11) NOT NULL,
  `face` int(11) NOT NULL,
  `skin` int(11) NOT NULL,
  `x` int(11) NOT NULL DEFAULT '0',
  `y` int(11) NOT NULL DEFAULT '0',
  `map` int(11) NOT NULL,
  `charid` int(11) NOT NULL,
  `scriptid` int(11) NOT NULL,
  `foothold` int(11) NOT NULL,
  `dir` tinyint(1) NOT NULL DEFAULT '0',
  `gender` tinyint(1) NOT NULL DEFAULT '0',
  `pets` varchar(25) DEFAULT '0,0,0',
  PRIMARY KEY (`id`),
  KEY `scriptid` (`scriptid`),
  KEY `playernpcs_ibfk_1` (`charid`),
  CONSTRAINT `playernpcs_ibfk_1` FOREIGN KEY (`charid`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of playernpcs
-- ----------------------------

-- ----------------------------
-- Table structure for `playernpcs_equip`
-- ----------------------------
DROP TABLE IF EXISTS `playernpcs_equip`;
CREATE TABLE `playernpcs_equip` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `npcid` int(11) NOT NULL,
  `equipid` int(11) NOT NULL,
  `equippos` int(11) NOT NULL,
  `charid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `playernpcs_equip_ibfk_1` (`charid`),
  KEY `playernpcs_equip_ibfk_2` (`npcid`),
  CONSTRAINT `playernpcs_equip_ibfk_1` FOREIGN KEY (`charid`) REFERENCES `characters` (`id`) ON DELETE CASCADE,
  CONSTRAINT `playernpcs_equip_ibfk_2` FOREIGN KEY (`npcid`) REFERENCES `playernpcs` (`scriptid`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of playernpcs_equip
-- ----------------------------

-- ----------------------------
-- Table structure for `pqlog`
-- ----------------------------
DROP TABLE IF EXISTS `pqlog`;
CREATE TABLE `pqlog` (
  `pqid` int(10) NOT NULL AUTO_INCREMENT,
  `characterid` int(10) NOT NULL,
  `pqname` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `count` int(10) NOT NULL,
  `type` int(10) NOT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`pqid`),
  KEY `characterid` (`characterid`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pqlog
-- ----------------------------

-- ----------------------------
-- Table structure for `pvpstats`
-- ----------------------------
DROP TABLE IF EXISTS `pvpstats`;
CREATE TABLE `pvpstats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accountid` int(11) NOT NULL,
  `watk` int(11) NOT NULL DEFAULT '0' COMMENT '物理攻擊力',
  `matk` int(11) NOT NULL DEFAULT '0' COMMENT '魔法攻擊力',
  `wdef` int(11) NOT NULL DEFAULT '0' COMMENT '物理防禦',
  `mdef` int(11) NOT NULL DEFAULT '0' COMMENT '魔法防禦',
  `acc` int(11) NOT NULL DEFAULT '100' COMMENT '命中率',
  `avoid` int(11) NOT NULL DEFAULT '0' COMMENT '迴避率',
  `wdef_rate` int(11) NOT NULL DEFAULT '0' COMMENT '物理防禦增加x%',
  `mdef_rate` int(11) NOT NULL DEFAULT '0' COMMENT '魔法防禦增加x%',
  `ignore_def` int(11) NOT NULL DEFAULT '0' COMMENT '無視x%防禦',
  `damage_rate` int(11) NOT NULL DEFAULT '0' COMMENT '傷害增加x%',
  `ignore_damage` int(11) NOT NULL DEFAULT '0' COMMENT '傷害減少x%',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of pvpstats
-- ----------------------------

-- ----------------------------
-- Table structure for `pwreset`
-- ----------------------------
DROP TABLE IF EXISTS `pwreset`;
CREATE TABLE `pwreset` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(14) NOT NULL,
  `email` varchar(100) NOT NULL,
  `confirmkey` varchar(100) NOT NULL,
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `timestamp` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pwreset
-- ----------------------------

-- ----------------------------
-- Table structure for `questinfo`
-- ----------------------------
DROP TABLE IF EXISTS `questinfo`;
CREATE TABLE `questinfo` (
  `questinfoid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL DEFAULT '0',
  `quest` int(6) NOT NULL DEFAULT '0',
  `customData` varchar(555) DEFAULT NULL,
  PRIMARY KEY (`questinfoid`),
  KEY `characterid` (`characterid`),
  CONSTRAINT `questsinfo_ibfk_1` FOREIGN KEY (`characterid`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of questinfo
-- ----------------------------

-- ----------------------------
-- Table structure for `queststatus`
-- ----------------------------
DROP TABLE IF EXISTS `queststatus`;
CREATE TABLE `queststatus` (
  `queststatusid` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `account` int(11) NULL DEFAULT NULL,
  `world` int(11) NULL DEFAULT NULL,
  `characterid` int(11) NOT NULL DEFAULT '0',
  `quest` int(6) NOT NULL DEFAULT '0',
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `time` int(11) NOT NULL DEFAULT '0',
  `forfeited` int(11) NOT NULL DEFAULT '0',
  `customData` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`queststatusid`),
  KEY `characterid` (`characterid`),
  KEY `queststatusid` (`queststatusid`),
  CONSTRAINT `queststatus_ibfk_1` FOREIGN KEY (`characterid`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of queststatus
-- ----------------------------

-- ----------------------------
-- Table structure for `queststatusmobs`
-- ----------------------------
DROP TABLE IF EXISTS `queststatusmobs`;
CREATE TABLE `queststatusmobs` (
  `queststatusmobid` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `queststatusid` bigint(20) unsigned NOT NULL DEFAULT '0',
  `mob` int(11) NOT NULL DEFAULT '0',
  `count` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`queststatusmobid`),
  KEY `queststatusid` (`queststatusid`),
  CONSTRAINT `queststatusmobs_ibfk_1` FOREIGN KEY (`queststatusid`) REFERENCES `queststatus` (`queststatusid`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of queststatusmobs
-- ----------------------------

-- ----------------------------
-- Table structure for `quickslot`
-- ----------------------------
DROP TABLE IF EXISTS `quickslot`;
CREATE TABLE `quickslot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL DEFAULT '0',
  `index` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `key` tinyint(3) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `quickslot_ibfk_1` (`characterid`),
  CONSTRAINT `quickslot_ibfk_1` FOREIGN KEY (`characterid`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of quickslot
-- ----------------------------

-- ----------------------------
-- Table structure for `rankingtop`
-- ----------------------------
DROP TABLE IF EXISTS `rankingtop`;
CREATE TABLE `rankingtop` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `accountid` int(20) NOT NULL DEFAULT '0',
  `characterid` int(20) NOT NULL DEFAULT '0',
  `rankingname` varchar(20) CHARACTER SET utf8 NOT NULL,
  `value` int(20) NOT NULL,
  `time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rankingtop
-- ----------------------------

-- ----------------------------
-- Table structure for `reports`
-- ----------------------------
DROP TABLE IF EXISTS `reports`;
CREATE TABLE `reports` (
  `reportid` int(9) NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL DEFAULT '0',
  `type` tinyint(2) NOT NULL DEFAULT '0',
  `count` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`reportid`,`characterid`),
  KEY `characterid` (`characterid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reports
-- ----------------------------

-- ----------------------------
-- Table structure for `rings`
-- ----------------------------
DROP TABLE IF EXISTS `rings`;
CREATE TABLE `rings` (
  `ringid` int(11) NOT NULL AUTO_INCREMENT,
  `partnerRingId` int(11) NOT NULL DEFAULT '0',
  `partnerChrId` int(11) NOT NULL DEFAULT '0',
  `itemid` int(11) NOT NULL DEFAULT '0',
  `partnername` varchar(255) NOT NULL,
  PRIMARY KEY (`ringid`),
  KEY `ringid` (`ringid`),
  KEY `partnerChrId` (`partnerChrId`),
  KEY `partnerRingId` (`partnerRingId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of rings
-- ----------------------------

-- ----------------------------
-- Table structure for `savedlocations`
-- ----------------------------
DROP TABLE IF EXISTS `savedlocations`;
CREATE TABLE `savedlocations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL,
  `locationtype` int(11) NOT NULL DEFAULT '0',
  `map` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `savedlocations_ibfk_1` (`characterid`),
  CONSTRAINT `savedlocations_ibfk_1` FOREIGN KEY (`characterid`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of savedlocations
-- ----------------------------

-- ----------------------------
-- Table structure for `scroll_log`
-- ----------------------------
DROP TABLE IF EXISTS `scroll_log`;
CREATE TABLE `scroll_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accId` int(11) NOT NULL DEFAULT '0',
  `chrId` int(11) NOT NULL DEFAULT '0',
  `scrollId` int(11) NOT NULL DEFAULT '0',
  `itemId` int(11) NOT NULL DEFAULT '0',
  `oldSlots` tinyint(4) NOT NULL DEFAULT '0',
  `newSlots` tinyint(4) NOT NULL DEFAULT '0',
  `hammer` tinyint(4) NOT NULL DEFAULT '0',
  `result` varchar(13) NOT NULL DEFAULT '',
  `whiteScroll` tinyint(1) NOT NULL DEFAULT '0',
  `legendarySpirit` tinyint(1) NOT NULL DEFAULT '0',
  `vegaId` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of scroll_log
-- ----------------------------

-- ----------------------------
-- Table structure for `shares`
-- ----------------------------
DROP TABLE IF EXISTS `shares`;
CREATE TABLE `shares` (
  `channelid` int(11) NOT NULL AUTO_INCREMENT,
  `currentprice` int(11) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`channelid`),
  KEY `channelid` (`channelid`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shares
-- ----------------------------
INSERT INTO `shares` VALUES ('1', '391');

-- ----------------------------
-- Table structure for `shopitems`
-- ----------------------------
DROP TABLE IF EXISTS `shopitems`;
CREATE TABLE `shopitems` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `shops_id` int(10) unsigned NOT NULL DEFAULT '0',
  `nItemID` int(11) NOT NULL DEFAULT '0',
  `nPrice` bigint(20) NOT NULL DEFAULT '0',
  `nQuantity` int(11) NOT NULL DEFAULT '1',
  `position` int(11) NOT NULL DEFAULT '0',
  `nTokenItemID` int(11) NOT NULL DEFAULT '0',
  `nTokenPrice` int(11) NOT NULL DEFAULT '0',
  `nPointQuestID` int(11) NOT NULL DEFAULT '0',
  `nPointPrice` int(11) NOT NULL DEFAULT '0',
  `nItemPeriod` int(11) NOT NULL DEFAULT '0',
  `nPotentialGrade` int(11) NOT NULL DEFAULT '0',
  `nTabIndex` tinyint(3) NOT NULL DEFAULT '0',
  `nLevelLimitedMin` smallint(4) NOT NULL DEFAULT '0',
  `nLevelLimitedMax` smallint(4) NOT NULL DEFAULT '999',
  `ftSellStart` bigint(20) NOT NULL DEFAULT '-2',
  `ftSellEnd` bigint(20) NOT NULL DEFAULT '-1',
  `nBuyLimit` int(11) NOT NULL DEFAULT '0',
  `nBuyLimitWorldAccount` int(11) NOT NULL DEFAULT '0',
  `resetType` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `shopid` (`shops_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shopitems
-- ----------------------------

-- ----------------------------
-- Table structure for `shopitems_resetinfo`
-- ----------------------------
DROP TABLE IF EXISTS `shopitems_resetinfo`;
CREATE TABLE `shopitems_resetinfo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `shopitems_id` int(11) NOT NULL,
  `resettime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of shopitems_resetinfo
-- ----------------------------

-- ----------------------------
-- Table structure for `shopranks`
-- ----------------------------
DROP TABLE IF EXISTS `shopranks`;
CREATE TABLE `shopranks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shopid` int(11) NOT NULL DEFAULT '0',
  `rank` int(11) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `itemid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of shopranks
-- ----------------------------
INSERT INTO `shopranks` VALUES ('1', '9120229', '0', '十字旅團長', '1142321');
INSERT INTO `shopranks` VALUES ('2', '9120229', '1', '十字上校官', '1142320');
INSERT INTO `shopranks` VALUES ('3', '9120229', '2', '十字中校官', '1142319');
INSERT INTO `shopranks` VALUES ('4', '9120229', '3', '十字少校官', '1142318');
INSERT INTO `shopranks` VALUES ('5', '9120229', '4', '十字上尉官', '1142317');
INSERT INTO `shopranks` VALUES ('6', '9120229', '5', '十字中尉官', '1142316');
INSERT INTO `shopranks` VALUES ('7', '9120229', '6', '十字少尉官', '1142315');
INSERT INTO `shopranks` VALUES ('8', '9120229', '7', '十字准尉官', '1142314');
INSERT INTO `shopranks` VALUES ('9', '9120229', '8', '十字軍士長', '1142313');
INSERT INTO `shopranks` VALUES ('10', '9120229', '9', '十字高等兵', '1142312');
INSERT INTO `shopranks` VALUES ('11', '9120229', '10', '十字中等兵', '1142311');
INSERT INTO `shopranks` VALUES ('12', '9120229', '11', '十字初等兵', '1142310');

-- ----------------------------
-- Table structure for `shops`
-- ----------------------------
DROP TABLE IF EXISTS `shops`;
CREATE TABLE `shops` (
  `shopid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `npcid` int(11) DEFAULT '0',
  `shopname` text,
  PRIMARY KEY (`shopid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of shops
-- ----------------------------

-- ----------------------------
-- Table structure for `sidekicks`
-- ----------------------------
DROP TABLE IF EXISTS `sidekicks`;
CREATE TABLE `sidekicks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstid` int(11) NOT NULL DEFAULT '0',
  `secondid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of sidekicks
-- ----------------------------

-- ----------------------------
-- Table structure for `skillmacros`
-- ----------------------------
DROP TABLE IF EXISTS `skillmacros`;
CREATE TABLE `skillmacros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL DEFAULT '0',
  `position` tinyint(1) NOT NULL DEFAULT '0',
  `skill1` int(11) NOT NULL DEFAULT '0',
  `skill2` int(11) NOT NULL DEFAULT '0',
  `skill3` int(11) NOT NULL DEFAULT '0',
  `name` varchar(30) DEFAULT NULL,
  `shout` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `characterid` (`characterid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of skillmacros
-- ----------------------------

-- ----------------------------
-- Table structure for `skills`
-- ----------------------------
DROP TABLE IF EXISTS `skills`;
CREATE TABLE `skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `skillid` int(11) NOT NULL DEFAULT '0',
  `characterid` int(11) NOT NULL DEFAULT '0',
  `skilllevel` int(11) NOT NULL DEFAULT '0',
  `masterlevel` tinyint(4) NOT NULL DEFAULT '0',
  `expiration` bigint(20) NOT NULL DEFAULT '-1',
  `teachId` int(11) NOT NULL DEFAULT '0',
  `teachTimes` int(11) NOT NULL DEFAULT '0',
  `position` tinyint(4) NOT NULL DEFAULT '-1',
  PRIMARY KEY (`id`),
  KEY `skills_ibfk_1` (`characterid`),
  CONSTRAINT `skills_ibfk_1` FOREIGN KEY (`characterid`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of skills
-- ----------------------------

-- ----------------------------
-- Table structure for `skills_cooldowns`
-- ----------------------------
DROP TABLE IF EXISTS `skills_cooldowns`;
CREATE TABLE `skills_cooldowns` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charid` int(11) NOT NULL,
  `SkillID` int(11) NOT NULL,
  `length` bigint(20) NOT NULL,
  `StartTime` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `charid` (`charid`),
  CONSTRAINT `skills_cooldowns_ibfk_1` FOREIGN KEY (`charid`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of skills_cooldowns
-- ----------------------------

-- ----------------------------
-- Table structure for `spawns`
-- ----------------------------
DROP TABLE IF EXISTS `spawns`;
CREATE TABLE `spawns` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idd` int(11) NOT NULL,
  `f` int(11) NOT NULL,
  `fh` int(11) NOT NULL,
  `type` varchar(1) NOT NULL,
  `cy` int(11) NOT NULL,
  `rx0` int(11) NOT NULL,
  `rx1` int(11) NOT NULL,
  `x` int(11) NOT NULL,
  `y` int(11) NOT NULL,
  `mobtime` int(11) DEFAULT '1000',
  `mid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of spawns
-- ----------------------------

-- ----------------------------
-- Table structure for `speedruns`
-- ----------------------------
DROP TABLE IF EXISTS `speedruns`;
CREATE TABLE `speedruns` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `leader` varchar(13) NOT NULL,
  `timestring` varchar(1024) NOT NULL,
  `time` bigint(20) NOT NULL DEFAULT '0',
  `members` varchar(1024) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of speedruns
-- ----------------------------

-- ----------------------------
-- Table structure for `storages`
-- ----------------------------
DROP TABLE IF EXISTS `storages`;
CREATE TABLE `storages` (
  `storageid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `accountid` int(11) NOT NULL DEFAULT '0',
  `slots` int(11) NOT NULL DEFAULT '0',
  `meso` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`storageid`),
  KEY `accountid` (`accountid`),
  CONSTRAINT `storages_ibfk_1` FOREIGN KEY (`accountid`) REFERENCES `accounts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of storages
-- ----------------------------

-- ----------------------------
-- Table structure for `suggest`
-- ----------------------------
DROP TABLE IF EXISTS `suggest`;
CREATE TABLE `suggest` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charid` varchar(20) CHARACTER SET utf8 NOT NULL,
  `text` text CHARACTER SET utf8 NOT NULL,
  `date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `title` varchar(50) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of suggest
-- ----------------------------

-- ----------------------------
-- Table structure for `systemupdatelog`
-- ----------------------------
DROP TABLE IF EXISTS `systemupdatelog`;
CREATE TABLE `systemupdatelog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `patchname` varchar(50) NOT NULL,
  `lasttime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of systemupdatelog
-- ----------------------------

INSERT INTO systemupdatelog
(patchname)
VALUES
("真實符文屬性"),
("寵物第二BUFF欄位"),
("公會V240擴充職位欄位"),
("移除商城道具extra_flags屬性"),
("公會職位預設值"),
("鍵位欄位擴充補丁"),
("移除pokemon和monsterbook表"),
("寵物Buff欄屬性"),
("移除extendedslots表"),
("道具新增extendedSlot屬性"),
("增加傳授次數屬性");

-- ----------------------------
-- Table structure for `tournamentlog`
-- ----------------------------
DROP TABLE IF EXISTS `tournamentlog`;
CREATE TABLE `tournamentlog` (
  `logid` int(11) NOT NULL AUTO_INCREMENT,
  `winnerid` int(11) NOT NULL DEFAULT '0',
  `numContestants` int(11) NOT NULL DEFAULT '0',
  `when` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`logid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of tournamentlog
-- ----------------------------

-- ----------------------------
-- Table structure for `tradesystemgiveback`
-- ----------------------------
DROP TABLE IF EXISTS `tradesystemgiveback`;
CREATE TABLE `tradesystemgiveback` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NOT NULL,
  `meso` bigint(20) NOT NULL DEFAULT '0',
  `dianquan` bigint(20) NOT NULL DEFAULT '0',
  `diyong` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `cid` (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tradesystemgiveback
-- ----------------------------

-- ----------------------------
-- Table structure for `trocklocations`
-- ----------------------------
DROP TABLE IF EXISTS `trocklocations`;
CREATE TABLE `trocklocations` (
  `trockid` int(11) NOT NULL AUTO_INCREMENT,
  `characterid` int(11) DEFAULT NULL,
  `mapid` int(11) DEFAULT NULL,
  `vip` int(11) NOT NULL,
  PRIMARY KEY (`trockid`),
  KEY `characterid` (`characterid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of trocklocations
-- ----------------------------

-- ----------------------------
-- Table structure for `vcoreskill`
-- ----------------------------
DROP TABLE IF EXISTS `vcoreskill`;
CREATE TABLE `vcoreskill` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL DEFAULT '0',
  `vcoreid` int(11) NOT NULL DEFAULT '0',
  `level` int(11) NOT NULL DEFAULT '0',
  `exp` int(11) NOT NULL DEFAULT '0',
  `skill1` int(11) NOT NULL DEFAULT '0',
  `skill2` int(11) NOT NULL DEFAULT '0',
  `skill3` int(11) NOT NULL DEFAULT '0',
  `slot` int(11) NOT NULL DEFAULT '1',
  `index` int(11) NOT NULL DEFAULT '-1',
  PRIMARY KEY (`id`),
  KEY `characterid` (`characterid`),
  CONSTRAINT `vcoreskill_ibfk_1` FOREIGN KEY (`characterid`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vcoreskill
-- ----------------------------

-- ----------------------------
-- Table structure for `vmatrixslot`
-- ----------------------------
DROP TABLE IF EXISTS `vmatrixslot`;
CREATE TABLE `vmatrixslot` (
  `characters_id` int(11) NOT NULL,
  `slot` int(11) NOT NULL,
  `extend` int(11) NOT NULL DEFAULT '0',
  `unlock` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`characters_id`,`slot`),
  KEY `characters_id` (`characters_id`),
  CONSTRAINT `vmatrixslot_ibfk_1` FOREIGN KEY (`characters_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vmatrixslot
-- ----------------------------

-- ----------------------------
-- Table structure for `wishlist`
-- ----------------------------
DROP TABLE IF EXISTS `wishlist`;
CREATE TABLE `wishlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `characterid` int(11) NOT NULL,
  `sn` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `characterid` (`characterid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- ----------------------------
-- Records of wishlist
-- ----------------------------

-- ----------------------------
-- Table structure for `wz_override`
-- ----------------------------
DROP TABLE IF EXISTS `wz_override`;
CREATE TABLE `wz_override` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `skillid` int(11) NOT NULL,
  `key` varchar(20) NOT NULL,
  `value` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wz_override
-- ----------------------------

-- ----------------------------
-- Table structure for `zdata_dailygifts`
-- ----------------------------
DROP TABLE IF EXISTS `zdata_dailygifts`;
CREATE TABLE `zdata_dailygifts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `month` int(11) NOT NULL,
  `day` int(11) NOT NULL,
  `itemid` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  `commodityid` int(11) NOT NULL DEFAULT '0',
  `term` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `month` (`month`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zdata_dailygifts
-- ----------------------------
INSERT INTO `zdata_dailygifts` VALUES ('873', '7', '1', '2022709', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('874', '7', '2', '2028048', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('875', '7', '3', '2049158', '5', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('876', '7', '4', '2450022', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('877', '7', '5', '2049116', '10', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('878', '7', '6', '2022991', '500', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('879', '7', '7', '4001839', '1000', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('880', '7', '8', '2550000', '10', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('881', '7', '9', '2530000', '3', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('882', '7', '10', '4033667', '15', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('883', '7', '11', '2022709', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('884', '7', '12', '4001832', '200', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('885', '7', '13', '4002001', '1', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('886', '7', '14', '2049124', '5', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('887', '7', '15', '2613051', '1', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('888', '7', '16', '2049156', '5', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('889', '7', '17', '2612062', '1', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('890', '7', '18', '2470000', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('891', '7', '19', '2049116', '5', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('892', '7', '20', '2612061', '1', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('893', '7', '21', '2470000', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('894', '7', '22', '2613051', '1', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('895', '7', '23', '5062022', '1', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('896', '7', '24', '5062024', '1', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('897', '7', '25', '5062001', '1', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('898', '7', '26', '2049500', '1', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('899', '7', '27', '5210001', '1', '0', '7');
INSERT INTO `zdata_dailygifts` VALUES ('900', '7', '28', '2048817', '1', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1736', '10', '1', '4001839', '1000', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1737', '10', '2', '2049124', '6', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1738', '10', '3', '4001832', '500', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1739', '10', '4', '2450022', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1740', '10', '5', '2022709', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1741', '10', '6', '2028048', '5', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1742', '10', '7', '2049156', '3', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1743', '10', '8', '2049158', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1744', '10', '9', '2048721', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1745', '10', '10', '4001832', '1000', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1746', '10', '11', '2049116', '10', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1747', '10', '12', '2022991', '500', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1748', '10', '13', '2049116', '10', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1749', '10', '14', '2550000', '10', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1750', '10', '15', '2470000', '3', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1751', '10', '16', '2530000', '3', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1752', '10', '17', '2431935', '5', '0', '7');
INSERT INTO `zdata_dailygifts` VALUES ('1753', '10', '18', '2022709', '1', '0', '1');
INSERT INTO `zdata_dailygifts` VALUES ('1754', '10', '19', '2049124', '5', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1755', '10', '20', '4001839', '1500', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1756', '10', '21', '2470000', '2', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1757', '10', '22', '2613050', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1758', '10', '23', '5044011', '1', '0', '7');
INSERT INTO `zdata_dailygifts` VALUES ('1759', '10', '24', '2612061', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1760', '10', '25', '2049116', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1761', '10', '26', '2612062', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1762', '10', '27', '5062022', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1763', '10', '28', '5062024', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1764', '12', '1', '4001839', '1000', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1765', '12', '2', '2049124', '6', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1766', '12', '3', '4001832', '500', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1767', '12', '4', '2450022', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1768', '12', '5', '2022709', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1769', '12', '6', '2028048', '5', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1770', '12', '7', '2049156', '3', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1771', '12', '8', '2049158', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1772', '12', '9', '2048721', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1773', '12', '10', '4001832', '1000', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1774', '12', '11', '2049116', '10', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1775', '12', '12', '2022991', '500', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1776', '12', '13', '2049116', '10', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1777', '12', '14', '2550000', '10', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1778', '12', '15', '2470000', '3', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1779', '12', '16', '2530000', '3', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1780', '12', '17', '2431935', '5', '0', '7');
INSERT INTO `zdata_dailygifts` VALUES ('1781', '12', '18', '2022709', '1', '0', '1');
INSERT INTO `zdata_dailygifts` VALUES ('1782', '12', '19', '2049124', '5', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1783', '12', '20', '4001839', '1500', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1784', '12', '21', '2470000', '2', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1785', '12', '22', '2613050', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1786', '12', '23', '5044011', '1', '0', '7');
INSERT INTO `zdata_dailygifts` VALUES ('1787', '12', '24', '2612061', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1788', '12', '25', '2049116', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1789', '12', '26', '2612062', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1790', '12', '27', '5062022', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1791', '12', '28', '5062024', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1792', '1', '1', '4001839', '1000', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1793', '1', '2', '2049124', '6', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1794', '1', '3', '4001832', '500', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1795', '1', '4', '2450022', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1796', '1', '5', '2022709', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1797', '1', '6', '2028048', '5', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1798', '1', '28', '5062024', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1799', '1', '27', '5062022', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1800', '1', '26', '2612062', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1801', '1', '25', '2049116', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1802', '1', '24', '2612061', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1803', '1', '23', '5044011', '1', '0', '7');
INSERT INTO `zdata_dailygifts` VALUES ('1804', '1', '22', '2613050', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1805', '1', '21', '2470000', '2', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1806', '1', '20', '4001839', '1500', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1807', '1', '19', '2049124', '5', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1808', '1', '18', '2022709', '1', '0', '1');
INSERT INTO `zdata_dailygifts` VALUES ('1809', '1', '17', '2431935', '5', '0', '7');
INSERT INTO `zdata_dailygifts` VALUES ('1810', '1', '16', '2530000', '3', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1811', '1', '15', '2470000', '3', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1812', '1', '14', '2550000', '10', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1813', '1', '13', '2049116', '10', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1814', '1', '12', '2022991', '500', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1815', '1', '11', '2049116', '10', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1816', '1', '10', '4001832', '1000', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1817', '1', '9', '2048721', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1818', '1', '8', '2049158', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1819', '1', '7', '2049156', '3', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1820', '4', '1', '2022709', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1821', '4', '2', '2028048', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1822', '4', '3', '2049158', '5', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1823', '4', '4', '2450022', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1824', '4', '5', '2049116', '10', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1825', '4', '6', '2022991', '500', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1826', '4', '7', '4001839', '1000', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1827', '4', '8', '2550000', '10', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1828', '4', '9', '2530000', '3', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1829', '4', '10', '4033667', '15', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1830', '4', '11', '2022709', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1831', '4', '12', '4001832', '200', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1832', '4', '13', '4002001', '1', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1833', '4', '14', '2049124', '5', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1834', '4', '15', '2613051', '1', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1835', '4', '16', '2049156', '5', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1836', '4', '17', '2612062', '1', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1837', '4', '18', '2470000', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1838', '4', '19', '2049116', '5', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1839', '4', '20', '2612061', '1', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1840', '4', '21', '2470000', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1841', '4', '22', '2613051', '1', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1842', '4', '23', '5062022', '1', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1843', '4', '24', '5062024', '1', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1844', '4', '25', '5062001', '1', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1845', '4', '26', '2049500', '1', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1846', '4', '27', '5210001', '1', '0', '7');
INSERT INTO `zdata_dailygifts` VALUES ('1847', '4', '28', '2048817', '1', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1848', '6', '1', '4001839', '1000', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1849', '6', '2', '2049124', '6', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1850', '6', '3', '4001832', '500', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1851', '6', '4', '2450022', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1852', '6', '5', '2022709', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1853', '6', '6', '2028048', '5', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1854', '6', '7', '2049156', '3', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1855', '6', '8', '2049158', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1856', '6', '9', '2048721', '2', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1857', '6', '10', '4001832', '1000', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1858', '6', '11', '2049116', '10', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1859', '6', '12', '2022991', '500', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1860', '6', '13', '2049116', '10', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1861', '6', '14', '2550000', '10', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1862', '6', '15', '2470000', '3', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1863', '6', '16', '2530000', '3', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1864', '6', '17', '2431935', '5', '0', '7');
INSERT INTO `zdata_dailygifts` VALUES ('1865', '6', '18', '2022709', '1', '0', '1');
INSERT INTO `zdata_dailygifts` VALUES ('1866', '6', '19', '2049124', '5', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1867', '6', '20', '4001839', '1500', '0', '0');
INSERT INTO `zdata_dailygifts` VALUES ('1868', '6', '21', '2470000', '2', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1869', '6', '22', '2613050', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1870', '6', '23', '5044011', '1', '0', '7');
INSERT INTO `zdata_dailygifts` VALUES ('1871', '6', '24', '2612061', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1872', '6', '25', '2049116', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1873', '6', '26', '2612062', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1874', '6', '27', '5062022', '1', '0', '3');
INSERT INTO `zdata_dailygifts` VALUES ('1875', '6', '28', '5062024', '1', '0', '3');

-- ----------------------------
-- Table structure for `zdata_reactordrops`
-- ----------------------------
DROP TABLE IF EXISTS `zdata_reactordrops`;
CREATE TABLE `zdata_reactordrops` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `dropperid` int(11) NOT NULL,
  `itemid` int(11) NOT NULL,
  `chance` int(11) NOT NULL,
  `questid` int(5) NOT NULL DEFAULT '-1',
  `minimum` int(11) NOT NULL DEFAULT '1',
  `maximum` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `reactorid` (`dropperid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 PACK_KEYS=1;

-- ----------------------------
-- Records of zdata_reactordrops
-- ----------------------------
INSERT INTO `zdata_reactordrops` VALUES ('1', '1002009', '4031161', '999999', '1008', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('2', '1002009', '4031162', '999999', '1008', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('3', '1002009', '4033915', '999999', '32208', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('4', '1002009', '4033914', '999999', '32213', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('5', '9211000', '4001528', '300000', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('10', '3102000', '2022712', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('9', '3102000', '4000276', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('11', '3102000', '4034738', '999999', '23003', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('262', '8630000', '4310098', '800000', '0', '2', '3');
INSERT INTO `zdata_reactordrops` VALUES ('261', '8630000', '4310098', '800000', '0', '2', '3');
INSERT INTO `zdata_reactordrops` VALUES ('260', '8630000', '4310098', '800000', '0', '2', '3');
INSERT INTO `zdata_reactordrops` VALUES ('259', '8630000', '2000005', '850000', '0', '5', '20');
INSERT INTO `zdata_reactordrops` VALUES ('258', '8630000', '2000005', '850000', '0', '5', '20');
INSERT INTO `zdata_reactordrops` VALUES ('257', '8630000', '2000005', '850000', '0', '5', '20');
INSERT INTO `zdata_reactordrops` VALUES ('256', '8630000', '2000005', '850000', '0', '5', '20');
INSERT INTO `zdata_reactordrops` VALUES ('255', '8630000', '2615002', '150000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('254', '8630000', '2615002', '150000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('253', '8630000', '2615002', '150000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('252', '8630000', '2615002', '150000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('251', '8630000', '1132243', '8222', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('250', '8630000', '1122264', '8222', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('249', '8630000', '1113072', '8222', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('248', '8630000', '1032220', '8222', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('263', '8630000', '4310098', '800000', '0', '2', '3');
INSERT INTO `zdata_reactordrops` VALUES ('463', '8630001', '4310098', '800000', '0', '3', '5');
INSERT INTO `zdata_reactordrops` VALUES ('462', '8630001', '4310098', '800000', '0', '3', '5');
INSERT INTO `zdata_reactordrops` VALUES ('461', '8630001', '4310098', '800000', '0', '3', '5');
INSERT INTO `zdata_reactordrops` VALUES ('460', '8630001', '4310098', '800000', '0', '3', '5');
INSERT INTO `zdata_reactordrops` VALUES ('459', '8630001', '2000005', '850000', '0', '5', '20');
INSERT INTO `zdata_reactordrops` VALUES ('458', '8630001', '2000005', '850000', '0', '5', '20');
INSERT INTO `zdata_reactordrops` VALUES ('457', '8630001', '2000005', '850000', '0', '5', '20');
INSERT INTO `zdata_reactordrops` VALUES ('456', '8630001', '2000005', '850000', '0', '5', '20');
INSERT INTO `zdata_reactordrops` VALUES ('455', '8630001', '2000005', '850000', '0', '5', '20');
INSERT INTO `zdata_reactordrops` VALUES ('454', '8630001', '2615002', '150000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('453', '8630001', '2615002', '150000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('452', '8630001', '2615002', '150000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('451', '8630001', '1113073', '8222', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('450', '8630001', '1122265', '8222', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('449', '8630001', '1132244', '8222', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('448', '8630001', '1032221', '8222', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('582', '8630002', '4310097', '800000', '0', '2', '3');
INSERT INTO `zdata_reactordrops` VALUES ('581', '8630002', '4310097', '800000', '0', '2', '3');
INSERT INTO `zdata_reactordrops` VALUES ('580', '8630002', '4310097', '800000', '0', '2', '3');
INSERT INTO `zdata_reactordrops` VALUES ('579', '8630002', '2000005', '850000', '0', '5', '20');
INSERT INTO `zdata_reactordrops` VALUES ('578', '8630002', '2000005', '850000', '0', '5', '20');
INSERT INTO `zdata_reactordrops` VALUES ('577', '8630002', '2000005', '850000', '0', '5', '20');
INSERT INTO `zdata_reactordrops` VALUES ('576', '8630002', '2000005', '850000', '0', '5', '20');
INSERT INTO `zdata_reactordrops` VALUES ('575', '8630002', '2615003', '150000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('574', '8630002', '2615003', '150000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('573', '8630002', '2615003', '150000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('572', '8630002', '1113074', '8222', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('571', '8630002', '1032222', '8222', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('570', '8630002', '1122266', '8222', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('569', '8630002', '1132245', '8222', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('583', '8630002', '4310097', '800000', '0', '2', '3');
INSERT INTO `zdata_reactordrops` VALUES ('687', '8630003', '4310097', '800000', '0', '2', '4');
INSERT INTO `zdata_reactordrops` VALUES ('686', '8630003', '4310097', '800000', '0', '2', '4');
INSERT INTO `zdata_reactordrops` VALUES ('685', '8630003', '4310097', '800000', '0', '2', '4');
INSERT INTO `zdata_reactordrops` VALUES ('684', '8630003', '4310097', '800000', '0', '2', '4');
INSERT INTO `zdata_reactordrops` VALUES ('683', '8630003', '4310097', '800000', '0', '2', '4');
INSERT INTO `zdata_reactordrops` VALUES ('682', '8630003', '2000005', '850000', '0', '5', '20');
INSERT INTO `zdata_reactordrops` VALUES ('681', '8630003', '2000005', '850000', '0', '5', '20');
INSERT INTO `zdata_reactordrops` VALUES ('680', '8630003', '2000005', '850000', '0', '5', '20');
INSERT INTO `zdata_reactordrops` VALUES ('679', '8630003', '2000005', '850000', '0', '5', '20');
INSERT INTO `zdata_reactordrops` VALUES ('678', '8630003', '1113075', '8222', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('677', '8630003', '1032223', '8222', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('676', '8630003', '1122267', '8222', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('675', '8630003', '1132246', '8222', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('688', '8630003', '4310097', '800000', '0', '2', '4');
INSERT INTO `zdata_reactordrops` VALUES ('690', '2112018', '4032860', '900000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('691', '1209001', '4032980', '999999', '2565', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('692', '1032001', '4032616', '999999', '2623', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('694', '1402000', '4032309', '999999', '21013', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('695', '1402000', '4032310', '999999', '21013', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('696', '9250121', '4001815', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('697', '9250122', '4001816', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('718', '9250131', '4001818', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('712', '9250134', '4001823', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('713', '9250135', '4001824', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('714', '9250136', '4001825', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('715', '9250137', '4001826', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('716', '9250138', '4001827', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('717', '9250139', '4001828', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('710', '9250133', '4001822', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('989', '2001', '4031161', '999999', '1008', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('990', '2001', '4031162', '999999', '1008', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('991', '2001', '2010009', '400000', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('992', '2001', '2010000', '200000', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('993', '2001', '2000000', '200000', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('994', '2001', '2000001', '50000', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('995', '2001', '2000002', '30000', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('996', '2001', '2000003', '10000', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('997', '200002', '4010001', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('998', '200001', '4020001', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('999', '200001', '4010005', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1000', '200000', '4020004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1001', '200000', '4010004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1002', '200002', '4020005', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1003', '200003', '4010000', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1004', '200003', '4010003', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1005', '200004', '4004002', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1006', '200004', '4010002', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1007', '200004', '4020003', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1008', '200005', '4010006', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1009', '200005', '4020006', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1010', '200006', '4020002', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1011', '200006', '4020007', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1012', '200007', '4004000', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1013', '200007', '4020000', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1014', '200008', '4004004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1015', '200008', '4020008', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1016', '200009', '4004001', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1017', '200009', '4004003', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1018', '200009', '4010007', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1019', '200010', '4010008', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1020', '200000', '4011010', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1021', '200001', '4011010', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1022', '200002', '4011010', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1023', '200003', '4011010', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1024', '200004', '4011010', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1025', '200005', '4011010', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1026', '200006', '4011010', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1027', '200007', '4011010', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1028', '200008', '4011010', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1029', '200009', '4011010', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1030', '200011', '4021000', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1031', '200011', '4021001', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1032', '200011', '4021002', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1033', '200011', '4021003', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1034', '200011', '4021004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1035', '200011', '4021005', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1036', '200011', '4021006', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1037', '200011', '4021007', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1038', '200011', '4021008', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1039', '200011', '4011010', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1040', '100000', '4022023', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1041', '100001', '4022023', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1042', '100002', '4022023', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1043', '100003', '4022023', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1044', '100004', '4022023', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1045', '100005', '4022023', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1046', '100006', '4022023', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1047', '100007', '4022023', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1048', '100008', '4022023', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1049', '100009', '4022023', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1050', '100011', '4022023', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1051', '100011', '4022023', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1052', '100011', '4022023', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1053', '100011', '4022023', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1054', '100011', '4022023', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1055', '100011', '4022023', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1056', '100011', '4022023', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1057', '100011', '4022023', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1058', '100011', '4022023', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1059', '100011', '4022023', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1060', '100000', '4022000', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1061', '100000', '4022001', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1062', '100001', '4022002', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1063', '100001', '4022003', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1064', '100002', '4022004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1065', '100002', '4022005', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1066', '100003', '4022006', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1067', '100003', '4022007', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1068', '100004', '4022008', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1069', '100004', '4022009', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1070', '100005', '4022010', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1071', '100005', '4022011', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1072', '100006', '4022012', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1073', '100006', '4022013', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1074', '100007', '4022014', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1075', '100007', '4022015', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1076', '100008', '4022016', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1077', '100008', '4022017', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1078', '100009', '4022018', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1079', '100009', '4022019', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1080', '100010', '4022022', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1081', '200011', '4005000', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1082', '200011', '4005001', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1083', '200011', '4005002', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1084', '200011', '4005003', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1085', '200011', '4005004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1086', '200011', '4011004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1087', '200011', '4011005', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1088', '200011', '4011006', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1089', '200011', '4011003', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1090', '200011', '4011002', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1091', '200011', '4011001', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1092', '200011', '4011000', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1093', '200011', '4011007', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1094', '200011', '4011008', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1095', '200011', '4011009', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1096', '100000', '4022022', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1097', '100010', '4022020', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1098', '100010', '4022021', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1099', '200013', '4005001', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1100', '200013', '4005002', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1101', '200013', '4005003', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1102', '200013', '4005004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1103', '200013', '4011004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1104', '200013', '4011005', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1105', '200013', '4011006', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1106', '200013', '4011003', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1107', '200013', '4011002', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1108', '200013', '4011001', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1109', '200013', '4011000', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1110', '200013', '4011007', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1111', '200013', '4011008', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1112', '200013', '4011009', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1113', '200013', '4005000', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1114', '200013', '4021000', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1115', '200013', '4021001', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1116', '200013', '4021002', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1117', '200013', '4021003', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1118', '200013', '4021004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1119', '200013', '4021005', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1120', '200013', '4021006', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1121', '200013', '4021007', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1122', '200013', '4021008', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1123', '200013', '4011010', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1124', '200013', '4010004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1125', '200013', '4020004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1126', '200013', '4020001', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1127', '200013', '4010005', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1128', '200013', '4010001', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1129', '200013', '4020005', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1130', '200013', '4010000', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1131', '200013', '4010003', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1132', '200013', '4010002', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1133', '200013', '4020003', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1134', '200013', '4004002', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1135', '200013', '4010006', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1136', '200013', '4020006', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1137', '200013', '4020007', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1138', '200013', '4010004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1139', '200013', '4020002', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1140', '200013', '4004000', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1141', '200013', '4020008', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1142', '200013', '4004004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1143', '200013', '4004001', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1144', '200013', '4004003', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1145', '200013', '4010007', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1146', '200013', '4010008', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1147', '200012', '4010004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1148', '200012', '4020004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1149', '200012', '4020001', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1150', '200012', '4010005', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1151', '200012', '4010001', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1152', '200012', '4020005', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1153', '200012', '4010000', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1154', '200012', '4010003', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1155', '200012', '4010002', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1156', '200012', '4020003', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1157', '200012', '4004002', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1158', '200012', '4010006', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1159', '200012', '4020006', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1160', '200012', '4020007', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1161', '200012', '4010004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1162', '200012', '4020002', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1163', '200012', '4004000', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1164', '200012', '4020008', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1165', '200012', '4004004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1166', '200012', '4004001', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1167', '200012', '4004003', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1168', '200012', '4010007', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1169', '200012', '4010008', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1170', '100011', '4022000', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1171', '100011', '4022001', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1172', '100011', '4022002', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1173', '100011', '4022003', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1174', '100011', '4022004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1175', '100011', '4022005', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1176', '100011', '4022006', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1177', '100011', '4022007', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1178', '100011', '4022008', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1179', '100011', '4022009', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1180', '100011', '4022011', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1181', '100011', '4022012', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1182', '100011', '4022013', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1183', '100011', '4022014', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1184', '100011', '4022015', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1185', '100011', '4022016', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1186', '100011', '4022017', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1187', '100011', '4022018', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1188', '100011', '4022019', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1189', '100011', '4022020', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1190', '100011', '4022021', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1191', '100011', '4022022', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1192', '100012', '4022000', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1193', '100012', '4022001', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1194', '100012', '4022002', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1195', '100012', '4022003', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1196', '100012', '4022004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1197', '100012', '4022005', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1198', '100012', '4022006', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1199', '100012', '4022007', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1200', '100012', '4022008', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1201', '100012', '4022009', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1202', '100012', '4022011', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1203', '100012', '4022012', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1204', '100012', '4022013', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1205', '100012', '4022014', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1206', '100012', '4022015', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1207', '100012', '4022016', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1208', '100012', '4022017', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1209', '100012', '4022018', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1210', '100012', '4022019', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1211', '100012', '4022020', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1212', '100012', '4022021', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1213', '100012', '4022022', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1214', '100013', '4022000', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1215', '100013', '4022001', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1216', '100013', '4022002', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1217', '100013', '4022003', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1218', '100013', '4022004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1219', '100013', '4022005', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1220', '100013', '4022006', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1221', '100013', '4022007', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1222', '100013', '4022008', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1223', '100013', '4022009', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1224', '100013', '4022011', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1225', '100013', '4022012', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1226', '100013', '4022013', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1227', '100013', '4022014', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1228', '100013', '4022015', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1229', '100013', '4022016', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1230', '100013', '4022017', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1231', '100013', '4022018', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1232', '100013', '4022019', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1233', '100013', '4022020', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1234', '100013', '4022021', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1235', '100013', '4022022', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1236', '100013', '4023000', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1237', '100013', '4023001', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1238', '100013', '4023002', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1239', '100013', '4023003', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1240', '100013', '4023004', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1241', '100013', '4023005', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1242', '100013', '4023006', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1243', '100013', '4023007', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1244', '100013', '4023008', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1245', '100013', '4023009', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1246', '100013', '4023011', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1247', '100013', '4023012', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1248', '100013', '4023013', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1249', '100013', '4023014', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1250', '100013', '4023015', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1251', '100013', '4023016', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1252', '100013', '4023017', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1253', '100013', '4023018', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1254', '100013', '4023019', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1255', '100013', '4023020', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1256', '100013', '4023021', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1257', '100013', '4023022', '999999', '-1', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1258', '9202000', '1032033', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1259', '9202002', '4001037', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1260', '9202001', '4001025', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1261', '9202004', '4001030', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1262', '9202003', '4001029', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1263', '9202005', '4001031', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1264', '9202006', '4001032', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1265', '9202007', '4001033', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1266', '9202008', '4001034', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1267', '9202009', '1032033', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1533', '9922002', '4000968', '100000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1529', '9202012', '2041007', '10000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1528', '9202012', '2040516', '10000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1527', '9202012', '2040513', '10000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1526', '9202012', '2040501', '10000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1525', '9202012', '2041004', '10000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1524', '9202012', '2041010', '10000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1523', '9202012', '2041007', '10000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1522', '9202012', '2040516', '10000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1521', '9202012', '2040513', '10000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1520', '9202012', '2040501', '10000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1519', '9202012', '2040504', '10000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1518', '9202012', '2001002', '300000', '0', '5', '25');
INSERT INTO `zdata_reactordrops` VALUES ('1517', '9202012', '2000006', '300000', '0', '5', '25');
INSERT INTO `zdata_reactordrops` VALUES ('1516', '9202012', '2000002', '300000', '0', '5', '25');
INSERT INTO `zdata_reactordrops` VALUES ('1515', '9202012', '2000001', '300000', '0', '5', '25');
INSERT INTO `zdata_reactordrops` VALUES ('1514', '9202012', '2000005', '300000', '0', '5', '25');
INSERT INTO `zdata_reactordrops` VALUES ('1513', '9202012', '2000004', '300000', '0', '5', '25');
INSERT INTO `zdata_reactordrops` VALUES ('1512', '9202012', '2001001', '300000', '0', '5', '25');
INSERT INTO `zdata_reactordrops` VALUES ('1511', '9202012', '2020015', '300000', '0', '5', '25');
INSERT INTO `zdata_reactordrops` VALUES ('1510', '9202012', '2020014', '300000', '0', '5', '25');
INSERT INTO `zdata_reactordrops` VALUES ('1532', '9922003', '4000968', '100000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1534', '9921001', '4000968', '100000', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1536', '9260002', '4034077', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1541', '2612002', '4001135', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1540', '2612001', '4001134', '999999', '0', '1', '1');
INSERT INTO `zdata_reactordrops` VALUES ('1550', '2612003', '2000006', '999999', '0', '5', '10');
INSERT INTO `zdata_reactordrops` VALUES ('1549', '2612003', '2000004', '999999', '0', '5', '10');
INSERT INTO `zdata_reactordrops` VALUES ('1548', '2612003', '2000005', '999999', '0', '5', '10');
INSERT INTO `zdata_reactordrops` VALUES ('1551', '2612003', '2000010', '999999', '0', '5', '10');

-- ----------------------------
-- Table structure for `zrank_dojang`
-- ----------------------------
DROP TABLE IF EXISTS `zrank_dojang`;
CREATE TABLE `zrank_dojang` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `world` int(11) DEFAULT NULL,
  `characters_id` int(11) DEFAULT NULL,
  `characters_name` varchar(13) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `job` int(11) DEFAULT NULL,
  `stage` int(11) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  `logtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zrank_dojang
-- ----------------------------

-- ----------------------------
-- Table structure for `zrank_lobby`
-- ----------------------------
DROP TABLE IF EXISTS `zrank_lobby`;
CREATE TABLE `zrank_lobby` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `world` int(11) DEFAULT NULL,
  `characters_id` int(11) DEFAULT NULL,
  `characters_name` varchar(13) DEFAULT NULL,
  `stage` int(11) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  `logtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `characters_id` (`characters_id`),
  CONSTRAINT `zrank_lobby_ibfk_1` FOREIGN KEY (`characters_id`) REFERENCES `characters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zrank_lobby
-- ----------------------------

-- ----------------------------
-- Table structure for `raffle_pool`
-- ----------------------------
DROP TABLE IF EXISTS `raffle_pool`;
CREATE TABLE `raffle_pool` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `period` int(11) NOT NULL,
  `itemId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT -1,
  `chance` int(11) NOT NULL,
  `smega` tinyint(1) NOT NULL DEFAULT 0,
  `type` int(11) NOT NULL,
  `allow` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
);

-- ----------------------------
-- Records of raffle_pool
-- ----------------------------

INSERT INTO raffle_pool(period, itemId, quantity, chance, smega, type) VALUES
-- 常駐獎池
-- 數位顯示字型
(0, 2432084, -1, 10000, 0, 5060049),
-- 衝擊震撼字型
(0, 2438163, -1, 7000, 0, 5060049),
-- 鍵盤戰士字型
(0, 2432526, -1, 5000, 0, 5060049),
-- 甜蜜餅乾字型
(0, 2438164, -1, 7000, 0, 5060049),
-- 鐵壁城牆字型
(0, 2438165, -1, 7000, 0, 5060049),
-- 多彩春風字型
(0, 2432532, -1, 10000, 0, 5060049),
-- 雪花飄落字型
(0, 2432355, -1, 5000, 0, 5060049),
-- 櫻花浪漫傷害字型
(0, 2432591, -1, 5000, 0, 5060049),
-- 皇家神獸學院傷害字型
(0, 2433899, -1, 7000, 0, 5060049),
-- 菲歐娜傷害字型
(0, 2433251, -1, 7000, 0, 5060049),
-- 殺人鯨傷害字型
(0, 2434794, -1, 500, 1, 5060049),
-- 史烏傷害字型
(0, 2434795, -1, 500, 1, 5060049),
-- 太陽傷害字型
(0, 2438200, -1, 7000, 0, 5060049),
-- 雨傷害字型
(0, 2433829, -1, 7000, 0, 5060049),
-- 彩虹傷害字型
(0, 2433830, -1, 7000, 0, 5060049),
-- 雪傷害字型
(0, 2433831, -1, 7000, 0, 5060049),
-- 閃電傷害字型
(0, 2433832, -1, 7000, 0, 5060049),
-- 風傷害字型
(0, 2433833, -1, 7000, 0, 5060049),
-- 青炎傷害字型
(0, 2434833, -1, 7000, 0, 5060049),
-- 火焰傷害字型
(0, 2435088, -1, 7000, 0, 5060049),
-- 凱內西斯傷害字型
(0, 2434817, -1, 7000, 0, 5060049),
-- 冰淇淋傷害字型
(0, 2435100, -1, 7000, 0, 5060049),
-- 甜甜圈傷害字型
(0, 2435099, -1, 7000, 0, 5060049),
-- 雷根糖傷害字型
(0, 2434662, -1, 7000, 0, 5060049),
-- 秘密傷害字型_特殊文字
(0, 2438766, -1, 5000, 0, 5060049),
-- 秘密傷害字型_音樂
(0, 2438764, -1, 5000, 0, 5060049),
-- 秘密傷害字型_數學
(0, 2434875, -1, 5000, 0, 5060049),
-- 秘密傷害字型_未翻譯
(0, 2438767, -1, 5000, 0, 5060049),
-- ㄎㄎㄎ傷害字型
(0, 2435548, -1, 3000, 0, 5060049),
-- 狂狼勇士傷害字型
(0, 2438785, -1, 5000, 1, 5060049),
-- 夜光傷害字型
(0, 2438786, -1, 1000, 1, 5060049),
-- 龍魔導士傷害字型
(0, 2438787, -1, 1000, 1, 5060049),
-- 隱月傷害字型
(0, 2438784, -1, 1000, 1, 5060049),
-- 精靈遊俠傷害字型
(0, 2438212, -1, 1000, 1, 5060049),
-- 幻影俠盜傷害字型
(0, 2438211, -1, 1000, 1, 5060049),
-- 第一期主打
-- 積雪傷害字型
(1, 2631152, -1, 500, 1, 5060049),
-- 爆竹傷害字型
(1, 2631149, -1, 500, 1, 5060049);
INSERT INTO raffle_pool(period, itemId, quantity, chance, smega, type) VALUES
-- 常駐獎池
-- 白色大象
(0, 5000096, -1, 1000, 0, 5222138),
-- 雲羊
(0, 5000225, -1, 1000, 0, 5222138),
-- 海豹阿波
(0, 5000221, -1, 1000, 0, 5222138),
-- 褐色小貓
(0, 5000000, -1, 10000, 0, 5222138),
-- 褐色小狗
(0, 5000001, -1, 10000, 0, 5222138),
-- 粉紅兔子
(0, 5000002, -1, 10000, 0, 5222138),
-- 小魔龍
(0, 5000003, -1, 10000, 0, 5222138),
-- 黑色小貓
(0, 5000004, -1, 10000, 0, 5222138),
-- 白色兔子
(0, 5000005, -1, 10000, 0, 5222138),
-- 哈士奇
(0, 5000006, -1, 10000, 0, 5222138),
-- 黑色小豬
(0, 5000007, -1, 10000, 0, 5222138),
-- 熊貓
(0, 5000008, -1, 10000, 0, 5222138),
-- 迪諾龍
(0, 5000009, -1, 10000, 0, 5222138),
-- 妮諾龍
(0, 5000010, -1, 10000, 0, 5222138),
-- 猴子
(0, 5000011, -1, 10000, 0, 5222138),
-- 小白虎
(0, 5000012, -1, 10000, 0, 5222138),
-- 大象
(0, 5000013, -1, 10000, 0, 5222138),
-- 雲豹
(0, 5000016, -1, 3000, 0, 5222138),
-- 雪吉拉
(0, 5000020, -1, 3000, 0, 5222138),
-- 火雞
(0, 5000022, -1, 3000, 0, 5222138),
-- 小企鵝
(0, 5000023, -1, 3000, 0, 5222138),
-- 小巴洛古
(0, 5000024, -1, 3000, 0, 5222138),
-- 齊天大聖
(0, 5000026, -1, 3000, 0, 5222138),
-- 豬八戒
(0, 5000027, -1, 3000, 0, 5222138),
-- 小刺猬
(0, 5000043, -1, 3000, 0, 5222138),
-- 菇菇寶貝
(0, 5000046, -1, 3000, 0, 5222138),
-- 小帥虎
(0, 5000066, -1, 3000, 0, 5222138),
-- 臭鼬
(0, 5000072, -1, 3000, 0, 5222138),
-- 噴水鯨魚
(0, 5000081, -1, 3000, 0, 5222138),
-- 鸚鵡噓噓
(0, 5000203, -1, 3000, 0, 5222138),
-- 海獺阿德力
(0, 5000204, -1, 3000, 0, 5222138),
-- 猩猩龐克
(0, 5000205, -1, 3000, 0, 5222138),
-- 迷你冰騎士
(0, 5000317, -1, 3000, 0, 5222138),
-- 甜美犰狳
(0, 5000320, -1, 3000, 0, 5222138),
-- 檸檬犰狳
(0, 5000321, -1, 3000, 0, 5222138),
-- 綠色犰狳
(0, 5000322, -1, 3000, 0, 5222138),
-- 生栗子
(0, 5000342, -1, 3000, 0, 5222138),
-- 小栗子
(0, 5000343, -1, 3000, 0, 5222138),
-- 烤焦栗子
(0, 5000344, -1, 3000, 0, 5222138),
-- 灰色哈士奇
(0, 5000095, -1, 3000, 0, 5222138),
-- 小萊伊
(0, 5000182, -1, 3000, 0, 5222138),
-- 小波波
(0, 5000183, -1, 3000, 0, 5222138),
-- 小阿樂
(0, 5000184, -1, 3000, 0, 5222138),
-- 松鼠亞倫
(0, 5000275, -1, 3000, 0, 5222138),
-- 松鼠薄荷
(0, 5000276, -1, 3000, 0, 5222138),
-- 松鼠娉可
(0, 5000277, -1, 3000, 0, 5222138),
-- 第一期主打
-- 未熟棉花寵物
(1, 5002096, -1, 1000, 1, 5222138),
-- 烤好棉花寵物
(1, 5002097, -1, 1000, 1, 5222138),
-- 烤焦棉花寵物
(1, 5002098, -1, 1000, 1, 5222138);
INSERT INTO raffle_pool(period, itemId, quantity, chance, smega, type) VALUES
-- 常駐獎池
-- 特別附加潛在能力賦予卷軸
(0, 2048306, -1, 800, 1, 5060057),
-- 黃金鐵鎚100%
(0, 2470015, -1, 2000, 0, 5060057),
-- 金烙印的印章
(0, 2049500, -1, 3000, 0, 5060057),
-- 傳說潛在能力卷軸50%
(0, 2049780, -1, 500, 1, 5060057),
-- 完美烙印的印章
(0, 2049506, -1, 2000, 0, 5060057),
-- 麥吉鑄幣
(0, 4001208, -1, 3000, 0, 5060057),
-- 溫莉鑄幣
(0, 4001209, -1, 2000, 0, 5060057),
-- 金色附加烙印的印章
(0, 2048222, -1, 5000, 0, 5060057),
-- 尤莉亞鑄幣
(0, 4001210, -1, 1500, 0, 5060057),
-- 加加鑄幣
(0, 4001211, -1, 1000, 1, 5060057),
-- 必魯鑄幣
(0, 4001212, -1, 500, 1, 5060057),
-- 完美附加烙印的印章
(0, 2048304, -1, 2000, 0, 5060057),
-- 強力輪迴星火
(0, 2048751, -1, 3000, 0, 5060057),
-- 永遠的輪迴星火
(0, 2048717, -1, 3000, 0, 5060057),
-- 超越的輪迴星火
(0, 2048739, -1, 2500, 0, 5060057),
-- 完美回真卷軸50%
(0, 2049616, -1, 10000, 0, 5060057),
-- 輪迴星火110級
(0, 2048700, -1, 10000, 0, 5060057),
-- 輪迴星火120級
(0, 2048701, -1, 9000, 0, 5060057),
-- 輪迴星火130級
(0, 2048702, -1, 8000, 0, 5060057),
-- 輪迴星火140級
(0, 2048703, -1, 7000, 0, 5060057),
-- 輪迴星火150級
(0, 2048704, -1, 5000, 0, 5060057),
-- 史烏機器人交換券
(0, 2433167, -1, 5000, 0, 5060057),
-- 機器殺人鯨交換券
(0, 2433339, -1, 5000, 0, 5060057),
-- 星力10星強化券
(0, 2049377, -1, 3000, 0, 5060057),
-- 星力11星強化券
(0, 2049380, -1, 2500, 1, 5060057),
-- 星力12星強化券
(0, 2049381, -1, 2300, 1, 5060057),
-- 星力13星強化券
(0, 2049382, -1, 2000, 1, 5060057),
-- 星力14星強化券
(0, 2049383, -1, 1000, 1, 5060057),
-- 星力15星強化券
(0, 2049384, -1, 800, 1, 5060057),
-- 星力16星強化券
(0, 2049385, -1, 750, 1, 5060057),
-- 星力17星強化券
(0, 2049386, -1, 700, 1, 5060057),
-- 星力18星強化券
(0, 2049387, -1, 500, 1, 5060057),
-- 星力19星強化券
(0, 2049388, -1, 300, 1, 5060057),
-- 星力20星強化券
(0, 2049389, -1, 100, 1, 5060057);
INSERT INTO raffle_pool(period, itemId, quantity, chance, smega, type) VALUES
-- 常駐獎池
-- 星力16星強化券
(0, 2049385, -1, 750, 1, 2028394),
-- 星力15星強化券
(0, 2049384, -1, 800, 1, 2028394),
-- 星力14星強化券
(0, 2049383, -1, 1000, 1, 2028394),
-- 鈦之心
(0, 1672040, -1, 10000, 0, 2028394),
-- 妖精之心
(0, 1672073, -1, 10000, 0, 2028394),
-- 露希妲靈魂寶珠
(0, 2591600, -1, 3000, 0, 2028394),
-- 艾畢奈亞的靈魂寶珠
(0, 2591282, -1, 1000, 1, 2028394),
-- 神秘冥界武器變換箱
(0, 2630626, -1, 200, 1, 2028394),
-- 神秘冥界防具變換箱
(0, 2630627, -1, 200, 1, 2028394);
INSERT INTO raffle_pool(period, itemId, quantity, chance, smega, type) VALUES
-- 常駐獎池
-- 航海師武器變換箱
(0, 2630568, -1, 200, 1, 2028393),
-- 航海師防具變換箱
(0, 2630569, -1, 200, 1, 2028393),
-- 黃金鐵鎚 100%
(0, 2470007, -1, 3000, 0, 2028393),
-- 附加潛在能力賦予卷軸70%
(0, 2048305, -1, 10000, 0, 2028393),
-- 睿智葫蘆
(0, 2630017, -1, 100, 1, 2028393),
-- 核心寶石20個交換券
(0, 2630606, -1, 1000, 0, 2028393),
-- 永遠的輪迴星火
(0, 2048717, -1, 3000, 0, 2028393),
-- 航海師混合弓
(0, 1452252, -1, 2000, 0, 2028393),
-- 航海師強弩
(0, 1462239, -1, 2000, 0, 2028393),
-- 航海師雙弩槍
(0, 1522138, -1, 2000, 0, 2028393),
-- 航海師閃耀之杖
(0, 1212115, -1, 2000, 0, 2028393),
-- 航海師文字短杖
(0, 1372222, -1, 2000, 0, 2028393),
-- 航海師文字長杖
(0, 1382259, -1, 2000, 0, 2028393),
-- 航海師魔法護腕
(0, 1282016, -1, 2000, 0, 2028393),
-- 航海師扇子
(0, 1552110, -1, 2000, 0, 2028393),
-- 航海師ESP限制器
(0, 1262017, -1, 2000, 0, 2028393),
-- 航海師之杖
(0, 1252099, -1, 2000, 0, 2028393),
-- 航海師死亡魔劍
(0, 1232109, -1, 2000, 0, 2028393),
-- 航海師軍刀
(0, 1302333, -1, 2000, 0, 2028393),
-- 航海師雙刃斧
(0, 1312199, -1, 2000, 0, 2028393),
-- 航海師十字錘
(0, 1322250, -1, 2000, 0, 2028393),
-- 航海師重劍
(0, 1402251, -1, 2000, 0, 2028393),
-- 航海師戰斧
(0, 1412177, -1, 2000, 0, 2028393),
-- 航海師戰錘
(0, 1422184, -1, 2000, 0, 2028393),
-- 航海師穿刺槍
(0, 1432214, -1, 2000, 0, 2028393),
-- 航海師戰戟
(0, 1442268, -1, 2000, 0, 2028393),
-- 航海師重拳槍
(0, 1582017, -1, 2000, 0, 2028393),
-- 航海師鐵刀
(0, 1542108, -1, 2000, 0, 2028393),
-- 航海師鎖鏈
(0, 1272016, -1, 2000, 0, 2028393),
-- 航海師短刀
(0, 1332274, -1, 2000, 0, 2028393),
-- 航海師雙刀
(0, 1342101, -1, 2000, 0, 2028393),
-- 航海師手杖
(0, 1362135, -1, 2000, 0, 2028393),
-- 航海師復仇拳套
(0, 1472261, -1, 2000, 0, 2028393),
-- 航海師能量劍
(0, 1242116, -1, 2000, 0, 2028393),
-- 航海師靈魂射手
(0, 1222109, -1, 2000, 0, 2028393),
-- 航海師能量劍
(0, 1242120, -1, 2000, 0, 2028393),
-- 航海師指虎
(0, 1482216, -1, 2000, 0, 2028393),
-- 航海師手槍
(0, 1492231, -1, 2000, 0, 2028393),
-- 航海師加農火砲
(0, 1532144, -1, 2000, 0, 2028393);
INSERT INTO raffle_pool(period, itemId, quantity, chance, smega, type) VALUES
-- 常駐獎池
-- 傳說潛在能力卷軸 100% 卷軸
(0, 2049786, -1, 30, 1, 2630018),
-- 幸運紅包 - 老鼠
(0, 2630019, -1, 3000, 0, 2630018),
-- 幸運紅包 - 牛
(0, 2630020, -1, 10000, 0, 2630018),
-- 幸運紅包 - 老虎
(0, 2630021, -1, 500, 0, 2630018),
-- 必魯鑄幣
(0, 4001212, -1, 100, 1, 2630018),
-- 幸運紅包 - 兔子
(0, 2630022, -1, 1000, 0, 2630018),
-- 幸運紅包 - 龍
(0, 2630023, -1, 1000, 0, 2630018),
-- 幸運紅包 - 蛇
(0, 2630024, -1, 10000, 0, 2630018),
-- 松軟花瓣皮膚變更券
(0, 2893004, -1, 50, 1, 2630018),
-- 幸運紅包 - 馬
(0, 2630025, -1, 1000, 0, 2630018),
-- 幸運紅包 - 羊
(0, 2630026, -1, 1000, 0, 2630018),
-- 幸運紅包 - 猴子
(0, 2630027, -1, 1000, 0, 2630018),
-- 紅暈花瓣皮膚變更券
(0, 2893005, -1, 50, 1, 2630018),
-- 幸運紅包 - 雞
(0, 2630028, -1, 1000, 0, 2630018),
-- 幸運紅包 - 狗
(0, 2630029, -1, 1000, 0, 2630018),
-- 幸運紅包 - 黃金小豬
(0, 2630030, -1, 500, 1, 2630018),
-- 楓點3000 商品券
(0, 2630150, -1, 10, 1, 2630018);
INSERT INTO raffle_pool(period, itemId, quantity, chance, smega, type) VALUES
-- 常駐獎池
-- 透明帽
(0, 1002186, -1, 10000, 0, 5222123),
-- 透明面具
(0, 1012057, -1, 10000, 0, 5222123),
-- 透明眼部裝飾
(0, 1022048, -1, 10000, 0, 5222123),
-- 透明披風
(0, 1102039, -1, 10000, 0, 5222123),
-- 透明手套
(0, 1082102, -1, 10000, 0, 5222123),
-- 透明鞋子
(0, 1072153, -1, 10000, 0, 5222123),
-- 透明耳環
(0, 1032024, -1, 10000, 0, 5222123),
-- 通用美髮券
(0, 5150042, -1, 10000, 0, 5222123),
-- 通用高級美髮券
(0, 5150043, -1, 10000, 0, 5222123),
-- 通用整形券
(0, 5152049, -1, 10000, 0, 5222123),
-- 通用高級整形券
(0, 5152050, -1, 10000, 0, 5222123),
-- 通用高級護膚券
(0, 5153013, -1, 10000, 0, 5222123),
-- 通用高級染髮券
(0, 5151033, -1, 10000, 0, 5222123),
-- 日拋隱形眼鏡(黑色)
(0, 5152100, -1, 10000, 0, 5222123),
-- 日拋隱形眼鏡(青色)
(0, 5152101, -1, 10000, 0, 5222123),
-- 日拋隱形眼鏡(紅色)
(0, 5152102, -1, 10000, 0, 5222123),
-- 日拋隱形眼鏡(綠色)
(0, 5152103, -1, 10000, 0, 5222123),
-- 日拋隱形眼鏡(黃色)
(0, 5152104, -1, 10000, 0, 5222123),
-- 日拋隱形眼鏡(藍色)
(0, 5152105, -1, 10000, 0, 5222123),
-- 日拋隱形眼鏡(紫色)
(0, 5152106, -1, 10000, 0, 5222123),
-- 日拋隱形眼鏡(粉色)
(0, 5152107, -1, 10000, 0, 5222123),
-- 核心寶石1個交換券
(0, 5680505, -1, 10000, 0, 5222123),
-- 超性能擴音器
(0, 5076100, -1, 10000, 0, 5222123),
-- 第一期主打
-- 雪花紛飛帽子
(1, 1005092, -1, 1000, 1, 5222123),
-- 雪花紛飛大衣(男)
(1, 1050481, -1, 1000, 1, 5222123),
-- 雪花紛飛大衣(女)
(1, 1051548, -1, 1000, 1, 5222123),
-- 雪花紛飛鞋子
(1, 1073258, -1, 1000, 1, 5222123),
-- 雪花紛飛的日子
(1, 1103074, -1, 1000, 1, 5222123),
-- 雪花紛飛
(1, 1702810, -1, 1000, 1, 5222123),
-- 輕飄飄的雪兔帽子(男)
(1, 1005416, -1, 1000, 1, 5222123),
-- 輕飄飄的雪兔帽子(女)
(1, 1005417, -1, 1000, 1, 5222123),
-- 輕飄飄的雪兔套服(男)
(1, 1053491, -1, 1000, 1, 5222123),
-- 輕飄飄的雪兔套服(女)
(1, 1053492, -1, 1000, 1, 5222123),
-- 輕飄飄的雪兔武器
(1, 1702954, -1, 1000, 1, 5222123),
-- 馴鹿歐洛拉戒指
(1, 1112978, -1, 1000, 1, 5222123);
INSERT INTO raffle_pool(period, itemId, quantity, chance, smega, type) VALUES
-- 常駐獎池
-- 神秘冥界幽靈弓手手套
(0, 1082697, -1, 500, 1, 5060028),
-- 神秘冥界幽靈弓手斗篷
(0, 1102942, -1, 500, 1, 5060028),
-- 神秘冥界幽靈魔法護腕
(0, 1282017, -1, 500, 1, 5060028),
-- 神秘冥界幽靈ESP限制者
(0, 1262039, -1, 500, 1, 5060028),
-- 神秘冥界幽靈靈魂射手
(0, 1222113, -1, 500, 1, 5060028),
-- 神秘冥界幽靈弓手鞋子
(0, 1073160, -1, 500, 1, 5060028),
-- 神秘冥界幽靈魔導士手套
(0, 1082696, -1, 500, 1, 5060028),
-- 神秘冥界幽靈魔導士鞋子
(0, 1073159, -1, 500, 1, 5060028),
-- 神秘冥界幽靈法師斗篷
(0, 1102941, -1, 500, 1, 5060028),
-- 神秘冥界幽靈騎士手套
(0, 1082695, -1, 500, 1, 5060028),
-- 神秘冥界幽靈騎士鞋子
(0, 1073158, -1, 500, 1, 5060028),
-- 神秘冥界幽靈騎士斗篷
(0, 1102940, -1, 500, 1, 5060028),
-- 神秘冥界幽靈小偷手套
(0, 1082698, -1, 500, 1, 5060028),
-- 神秘冥界幽靈小偷鞋子
(0, 1073161, -1, 500, 1, 5060028),
-- 神秘冥界幽靈小偷斗篷
(0, 1102943, -1, 500, 1, 5060028),
-- 神秘冥界幽靈海盜手套
(0, 1082699, -1, 500, 1, 5060028),
-- 神秘冥界幽靈海盜鞋子
(0, 1073162, -1, 500, 1, 5060028),
-- 神秘冥界幽靈海盜斗篷
(0, 1102944, -1, 500, 1, 5060028),
-- 神秘冥界幽靈魔導士套裝
(0, 1053064, -1, 500, 1, 5060028),
-- 神秘冥界幽靈弓手套裝
(0, 1053065, -1, 500, 1, 5060028),
-- 神秘冥界幽靈小偷套裝
(0, 1053066, -1, 500, 1, 5060028),
-- 神秘冥界幽靈海盜套裝
(0, 1053067, -1, 500, 1, 5060028),
-- 神秘冥界幽靈騎士套裝
(0, 1053063, -1, 500, 1, 5060028),
-- 神秘冥界幽靈騎士帽
(0, 1004808, -1, 500, 1, 5060028),
-- 神秘冥界幽靈之弓
(0, 1452257, -1, 500, 1, 5060028),
-- 神秘冥界幽靈十字弓
(0, 1462243, -1, 500, 1, 5060028),
-- 神秘冥界幽靈魔法帽
(0, 1004809, -1, 500, 1, 5060028),
-- 神秘冥界幽靈雙弩槍
(0, 1522143, -1, 500, 1, 5060028),
-- 神秘冥界幽靈閃耀之杖
(0, 1212120, -1, 500, 1, 5060028),
-- 神秘冥界幽靈扇子
(0, 1552119, -1, 500, 1, 5060028),
-- 神秘冥界幽靈弓手帽
(0, 1004810, -1, 500, 1, 5060028),
-- 神秘冥界幽靈短杖
(0, 1372228, -1, 500, 1, 5060028),
-- 神秘冥界幽靈長杖
(0, 1382265, -1, 500, 1, 5060028),
-- 神秘冥界幽靈復仇
-- 神秘冥界幽靈小偷帽
(0, 1004811, -1, 500, 1, 5060028),
-- 神秘冥界幽靈魔劍
(0, 1232113, -1, 500, 1, 5060028),
-- 神秘冥界幽靈長劍
(0, 1302343, -1, 500, 1, 5060028),
-- 神秘冥界幽靈之斧
(0, 1312203, -1, 500, 1, 5060028),
-- 神秘冥界幽靈海盜帽
(0, 1004812, -1, 500, 1, 5060028),
-- 神秘冥界幽靈之錘
(0, 1322255, -1, 500, 1, 5060028),
-- 神秘冥界幽靈雙手劍
(0, 1402259, -1, 500, 1, 5060028),
-- 神秘冥界幽靈雙手斧
(0, 1412181, -1, 500, 1, 5060028),
-- 神秘冥界幽靈騎士護肩
(0, 1152196, -1, 500, 1, 5060028),
-- 神秘冥界幽靈雙手錘
(0, 1422189, -1, 500, 1, 5060028),
-- 神秘冥界幽靈之槍
(0, 1432218, -1, 500, 1, 5060028),
-- 神秘冥界幽靈之矛
(0, 1442274, -1, 500, 1, 5060028),
-- 神秘冥界幽靈魔法護肩
(0, 1152197, -1, 500, 1, 5060028),
-- 神秘冥界幽靈重拳槍
(0, 1582023, -1, 500, 1, 5060028),
-- 神秘冥界幽靈刀
(0, 1542117, -1, 500, 1, 5060028),
-- 神秘冥界幽靈能量劍
(0, 1242121, -1, 500, 1, 5060028),
-- 神秘冥界幽靈弓手護肩
(0, 1152198, -1, 500, 1, 5060028),
-- 神秘冥界幽靈鎖鏈
(0, 1272017, -1, 500, 1, 5060028),
-- 神秘冥界幽靈鬥拳
(0, 1472265, -1, 500, 1, 5060028),
-- 神秘冥界幽靈短刀
(0, 1332279, -1, 500, 1, 5060028),
-- 神秘冥界幽靈小偷護肩
(0, 1152199, -1, 500, 1, 5060028),
-- 神秘冥界幽靈之刃
(0, 1342104, -1, 500, 1, 5060028),
-- 神秘冥界幽靈手杖
(0, 1362140, -1, 500, 1, 5060028),
-- 神秘冥界幽靈之爪
(0, 1482221, -1, 500, 1, 5060028),
-- 神秘冥界幽靈海盜護肩
(0, 1152200, -1, 500, 1, 5060028),
-- 神秘冥界幽靈火槍
(0, 1492235, -1, 500, 1, 5060028),
-- 神秘冥界幽靈加農砲
(0, 1532150, -1, 500, 1, 5060028),
-- 神秘冥界幽靈能量劍
(0, 1242122, -1, 500, 1, 5060028),
-- 特別附加潛在能力賦予卷軸
(0, 2048306, -1, 800, 1, 5060028),
-- 完美回真卷軸50%
(0, 2049616, -1, 10000, 0, 5060028),
-- 稀有潛在能力卷軸100%
(0, 2049700, -1, 3000, 0, 5060028),
-- 性向成長的秘藥
(0, 2436595, -1, 2000, 0, 5060028),
-- 黃金鐵鎚100%
(0, 2470015, -1, 10000, 0, 5060028),
-- 銀烙印的印章
(0, 2049501, -1, 5000, 0, 5060028),
-- 金烙印的印章
(0, 2049500, -1, 3000, 0, 5060028),
-- 完美烙印的印章
(0, 2049506, -1, 1000, 0, 5060028),
-- 銀色附加烙印的印章
(0, 2048303, -1, 2000, 0, 5060028),
-- 金色附加烙印的印章
(0, 2048222, -1, 2000, 0, 5060028),
-- 完美附加烙印的印章
(0, 2048304, -1, 1000, 0, 5060028),
-- 嬌小機器人(男)交換卷
(0, 2436736, -1, 10000, 0, 5060028),
-- 嬌小機器人(女)交換卷
(0, 2436737, -1, 10000, 0, 5060028),
-- 航海師混合弓
(0, 1452252, -1, 2000, 0, 5060028),
-- 航海師強弩
(0, 1462239, -1, 2000, 0, 5060028),
-- 航海師雙弩槍
(0, 1522138, -1, 2000, 0, 5060028),
-- 航海師閃耀之杖
(0, 1212115, -1, 2000, 0, 5060028),
-- 航海師文字短杖
(0, 1372222, -1, 2000, 0, 5060028),
-- 航海師文字長杖
(0, 1382259, -1, 2000, 0, 5060028),
-- 航海師海盜帽
(0, 1004426, -1, 2000, 0, 5060028),
-- 航海師魔法護腕
(0, 1282016, -1, 2000, 0, 5060028),
-- 航海師扇子
(0, 1552110, -1, 2000, 0, 5060028),
-- 航海師ESP限制器
(0, 1262017, -1, 2000, 0, 5060028),
-- 航海師之杖
(0, 1252099, -1, 2000, 0, 5060028),
-- 航海師死亡魔劍
(0, 1232109, -1, 2000, 0, 5060028),
-- 航海師軍刀
(0, 1302333, -1, 2000, 0, 5060028),
-- 航海師雙刃斧
(0, 1312199, -1, 2000, 0, 5060028),
-- 航海師十字錘
(0, 1322250, -1, 2000, 0, 5060028),
-- 航海師重劍
(0, 1402251, -1, 2000, 0, 5060028),
-- 航海師戰斧
(0, 1412177, -1, 2000, 0, 5060028),
-- 航海師戰錘
(0, 1422184, -1, 2000, 0, 5060028),
-- 航海師穿刺槍
(0, 1432214, -1, 2000, 0, 5060028),
-- 航海師戰戟
(0, 1442268, -1, 2000, 0, 5060028),
-- 航海師重拳槍
(0, 1582017, -1, 2000, 0, 5060028),
-- 航海師鐵刀
(0, 1542108, -1, 2000, 0, 5060028),
-- 航海師鎖鏈
(0, 1272016, -1, 2000, 0, 5060028),
-- 航海師短刀
(0, 1332274, -1, 2000, 0, 5060028),
-- 航海師雙刀
(0, 1342101, -1, 2000, 0, 5060028),
-- 航海師手杖
(0, 1362135, -1, 2000, 0, 5060028),
-- 航海師復仇拳套
(0, 1472261, -1, 2000, 0, 5060028),
-- 航海師能量劍
(0, 1242116, -1, 2000, 0, 5060028),
-- 航海師靈魂射手
(0, 1222109, -1, 2000, 0, 5060028),
-- 航海師能量劍
(0, 1242120, -1, 2000, 0, 5060028),
-- 航海師指虎
(0, 1482216, -1, 2000, 0, 5060028),
-- 航海師手槍
(0, 1492231, -1, 2000, 0, 5060028),
-- 航海師加農火砲
(0, 1532144, -1, 2000, 0, 5060028),
-- 航海師弓箭手手套
(0, 1082638, -1, 2000, 0, 5060028),
-- 航海師弓箭手鞋
(0, 1073033, -1, 2000, 0, 5060028),
-- 航海師弓箭手套裝
(0, 1052888, -1, 2000, 0, 5060028),
-- 航海師弓箭手肩膀
(0, 1152177, -1, 2000, 0, 5060028),
-- 航海師弓箭手帽
(0, 1004424, -1, 2000, 0, 5060028),
-- 航海師法師斗篷
(0, 1102794, -1, 2000, 0, 5060028),
-- 航海師法師手套
(0, 1082637, -1, 2000, 0, 5060028),
-- 航海師法師鞋
(0, 1073032, -1, 2000, 0, 5060028),
-- 航海師法師套裝
(0, 1052887, -1, 2000, 0, 5060028),
-- 航海師法師護肩
(0, 1152176, -1, 2000, 0, 5060028),
-- 航海師法師帽
(0, 1004423, -1, 2000, 0, 5060028),
-- 航海師劍士斗篷
(0, 1102775, -1, 2000, 0, 5060028),
-- 航海師劍士手套
(0, 1082636, -1, 2000, 0, 5060028),
-- 航海師劍士鞋
(0, 1073030, -1, 2000, 0, 5060028),
-- 航海師劍士套裝
(0, 1052882, -1, 2000, 0, 5060028),
-- 航海師劍士肩膀
(0, 1152174, -1, 2000, 0, 5060028),
-- 航海師海盜肩膀
(0, 1152179, -1, 2000, 0, 5060028),
-- 航海師劍士頭盔
(0, 1004422, -1, 2000, 0, 5060028),
-- 航海師盜賊披肩
(0, 1102796, -1, 2000, 0, 5060028),
-- 航海師盜賊手套
(0, 1082639, -1, 2000, 0, 5060028),
-- 航海師盜賊鞋
(0, 1073034, -1, 2000, 0, 5060028),
-- 航海師盜賊套裝
(0, 1052889, -1, 2000, 0, 5060028),
-- 航海師盜賊肩膀
(0, 1152178, -1, 2000, 0, 5060028),
-- 航海師盜賊帽
(0, 1004425, -1, 2000, 0, 5060028),
-- 航海師海盜披肩
(0, 1102797, -1, 2000, 0, 5060028),
-- 航海師海盜手套
(0, 1082640, -1, 2000, 0, 5060028),
-- 航海師海盜鞋
(0, 1073035, -1, 2000, 0, 5060028),
-- 航海師海盜套裝
(0, 1052890, -1, 2000, 0, 5060028);
INSERT INTO raffle_pool(period, itemId, quantity, chance, smega, type) VALUES
-- 常駐獎池
-- 皮卡啾聊天貼圖交換券(我可愛吧？)
(0, 5538121, -1, 10000, 0, 5680796),
-- 皮卡啾聊天貼圖交換券(感激)
(0, 5538122, -1, 10000, 0, 5680796),
-- 皮卡啾聊天貼圖交換券(肚子餓)
(0, 5538123, -1, 10000, 0, 5680796),
-- 皮卡啾聊天貼圖交換券(聽音樂)
(0, 5538124, -1, 10000, 0, 5680796),
-- 皮卡啾聊天貼圖交換券(應援)
(0, 5538125, -1, 10000, 0, 5680796),
-- 皮卡啾聊天貼圖交換券(呼叫)
(0, 5538126, -1, 10000, 0, 5680796),
-- 黑色皮卡啾聊天貼圖交換券(吐舌)
(0, 5538127, -1, 10000, 0, 5680796),
-- 黑色皮卡啾聊天貼圖交換券(憤怒)
(0, 5538128, -1, 10000, 0, 5680796),
-- 黑色皮卡啾聊天貼圖交換券(生氣)
(0, 5538129, -1, 10000, 0, 5680796),
-- 黑色皮卡啾聊天貼圖交換券(沮喪)
(0, 5538130, -1, 10000, 0, 5680796),
-- 黑色皮卡啾聊天貼圖交換券(焦躁不安)
(0, 5538131, -1, 10000, 0, 5680796),
-- 黑色皮卡啾聊天貼圖交換券(不要不要！)
(0, 5538132, -1, 10000, 0, 5680796),
-- 石之精靈聊天貼圖交換券(嘆氣)
(0, 5538133, -1, 10000, 0, 5680796),
-- 石之精靈聊天貼圖交換券(看不見)
(0, 5538134, -1, 10000, 0, 5680796),
-- 石之精靈聊天貼圖交換券(愛心)
(0, 5538135, -1, 10000, 0, 5680796),
-- 石之精靈聊天貼圖交換券(升等)
(0, 5538136, -1, 10000, 0, 5680796),
-- 小精靈聊天貼圖交換券(傷心)
(0, 5538137, -1, 10000, 0, 5680796),
-- 小精靈聊天貼圖交換券(我會反省)
(0, 5538138, -1, 10000, 0, 5680796),
-- 小精靈聊天貼圖交換券(得意)
(0, 5538139, -1, 10000, 0, 5680796),
-- 小精靈聊天貼圖交換券(閃爍眼神)
(0, 5538140, -1, 10000, 0, 5680796),
-- 露希妲聊天貼圖交換券(讚！)
(0, 5538141, -1, 1000, 1, 5680796),
-- 露希妲聊天貼圖交換券(噗滋)
(0, 5538142, -1, 1000, 1, 5680796),
-- 露希妲聊天貼圖交換券(淚眼汪汪)
(0, 5538143, -1, 1000, 1, 5680796),
-- 露希妲聊天貼圖交換券(夢中相見)
(0, 5538144, -1, 1000, 1, 5680796),
-- 露希妲聊天貼圖交換券(害羞)
(0, 5538145, -1, 1000, 1, 5680796),
-- 雪吉拉聊天貼圖交換券(很好)
(0, 5538147, -1, 10000, 0, 5680796),
-- 雪吉拉聊天貼圖交換券(否定)
(0, 5538148, -1, 10000, 0, 5680796),
-- 雪吉拉聊天貼圖交換券(加油)
(0, 5538149, -1, 10000, 0, 5680796),
-- 雪吉拉聊天貼圖交換券(你好)
(0, 5538150, -1, 10000, 0, 5680796),
-- 雪吉拉聊天貼圖交換券(愛心)
(0, 5538151, -1, 10000, 0, 5680796),
-- 雪吉拉聊天貼圖交換券(拍手)
(0, 5538152, -1, 10000, 0, 5680796),
-- 企鵝王聊天貼圖交換券(奔跑中)
(0, 5538153, -1, 10000, 0, 5680796),
-- 企鵝王聊天貼圖交換券(苦惱)
(0, 5538154, -1, 10000, 0, 5680796),
-- 企鵝王聊天貼圖交換券(害羞)
(0, 5538155, -1, 10000, 0, 5680796),
-- 企鵝王聊天貼圖交換券(冷清)
(0, 5538156, -1, 10000, 0, 5680796);
INSERT INTO raffle_pool(period, itemId, quantity, chance, smega, type) VALUES
-- 常駐獎池
-- 135 靈魂卷軸 100%
(0, 2590002, -1, 10000, 0, 5060029),
-- 140 靈魂卷軸 100%
(0, 2590003, -1, 10000, 0, 5060029),
-- 150 靈魂卷軸 100%
(0, 2590012, -1, 6000, 0, 5060029),
-- 200 靈魂卷軸 100%
(0, 2590023, -1, 2000, 1, 5060029),
-- 特別附加潛在能力賦予卷軸
(0, 2048306, -1, 3000, 0, 5060029),
-- 完美回真卷軸50%
(0, 2049616, -1, 10000, 0, 5060029),
-- 黃金鐵鎚100%
(0, 2470015, -1, 10000, 0, 5060029),
-- 銀烙印的印章
(0, 2049501, -1, 10000, 0, 5060029),
-- 金烙印的印章
(0, 2049500, -1, 5000, 0, 5060029),
-- 完美烙印的印章
(0, 2049506, -1, 3000, 0, 5060029),
-- 銀色附加烙印的印章
(0, 2048303, -1, 10000, 0, 5060029),
-- 金色附加烙印的印章
(0, 2048222, -1, 5000, 0, 5060029),
-- 完美附加烙印的印章
(0, 2048304, -1, 3000, 0, 5060029),
-- 真。極電飾品攻擊力卷軸100%
(0, 2046887, -1, 5000, 0, 5060029),
-- 真。極電飾品魔力卷軸100%
(0, 2046888, -1, 3000, 0, 5060029),
-- 真。極電寵物裝備攻擊力卷軸100%
(0, 2048806, -1, 3000, 0, 5060029),
-- 真。極電寵物裝備魔力卷軸100%
(0, 2048807, -1, 1500, 0, 5060029),
-- 真．極電雙手武器攻擊力卷軸100%
(0, 2612011, -1, 3000, 0, 5060029),
-- 真．極電雙手武器魔力卷軸100%
(0, 2612012, -1, 1000, 0, 5060029),
-- 真．極電單手武器攻擊力卷軸100%
(0, 2613005, -1, 3500, 0, 5060029),
-- 真．極電單手武器魔力卷軸100%
(0, 2613006, -1, 2000, 0, 5060029),
-- 真．極電防具攻擊力卷軸100%
(0, 2616002, -1, 5000, 0, 5060029),
-- 真．極電防具魔力卷軸100%
(0, 2616003, -1, 3000, 0, 5060029),
-- RED單手武器物攻卷軸
(0, 2613012, -1, 1000, 0, 5060029),
-- RED單手武器魔攻卷軸
(0, 2613013, -1, 500, 0, 5060029),
-- RED雙手武器物攻卷軸
(0, 2612019, -1, 1000, 0, 5060029),
-- RED雙手武器魔攻卷軸
(0, 2612020, -1, 300, 0, 5060029),
-- RED寵物裝備物攻卷軸
(0, 2048812, -1, 1000, 0, 5060029),
-- RED寵物裝備魔攻卷軸
(0, 2048813, -1, 500, 0, 5060029),
-- RED防具物攻卷軸
(0, 2616000, -1, 3000, 0, 5060029),
-- RED防具魔攻卷軸
(0, 2616001, -1, 1500, 0, 5060029),
-- RED飾品物攻卷軸
(0, 2615005, -1, 2500, 0, 5060029),
-- RED飾品魔攻卷軸
(0, 2615006, -1, 1000, 0, 5060029),
-- X單手武器攻擊力券
(0, 2613048, -1, 800, 0, 5060029),
-- X單手武器魔力券
(0, 2613049, -1, 380, 0, 5060029),
-- X雙手武器攻擊力券
(0, 2612055, -1, 800, 0, 5060029),
-- X雙手武器魔力券
(0, 2612056, -1, 200, 0, 5060029),
-- X防具攻擊力券
(0, 2616059, -1, 3000, 0, 5060029),
-- X防具魔力券
(0, 2616060, -1, 1500, 0, 5060029),
-- X裝飾攻擊力券
(0, 2615029, -1, 1500, 0, 5060029),
-- X裝飾魔力券
(0, 2615030, -1, 800, 0, 5060029),
-- X寵物裝備攻擊力券
(0, 2048815, -1, 800, 0, 5060029),
-- X寵物裝備魔力券
(0, 2048816, -1, 500, 0, 5060029),
-- V單手武器攻擊力卷軸
(0, 2613062, -1, 500, 1, 5060029),
-- V單手武器魔力卷軸
(0, 2613063, -1, 200, 1, 5060029),
-- V雙手武器攻擊力卷軸
(0, 2612074, -1, 500, 1, 5060029),
-- V雙手武器魔力卷軸
(0, 2612075, -1, 130, 1, 5060029),
-- V防具攻擊力卷軸
(0, 2616072, -1, 1000, 1, 5060029),
-- V防具魔力卷軸
(0, 2616073, -1, 300, 1, 5060029),
-- V裝飾品攻擊力卷軸
(0, 2615041, -1, 800, 1, 5060029),
-- V裝飾品魔力卷軸
(0, 2615042, -1, 250, 1, 5060029),
-- V寵物裝備攻擊力卷軸
(0, 2048819, -1, 500, 1, 5060029),
-- V寵物裝備魔力卷軸
(0, 2048820, -1, 200, 1, 5060029),
-- 究極的黑暗雙手武器攻擊力卷軸
(0, 2612080, -1, 80, 1, 5060029),
-- 究極的黑暗單手武器魔力卷軸
(0, 2613069, -1, 20, 1, 5060029),
-- 究極的黑暗飾品攻擊力卷軸
(0, 2615051, -1, 200, 1, 5060029),
-- 究極的黑暗雙手武器魔力卷軸
(0, 2612081, -1, 5, 1, 5060029),
-- 究極的黑暗飾品魔力卷軸
(0, 2615052, -1, 80, 1, 5060029),
-- 究極的黑暗防具攻擊力卷軸
(0, 2616216, -1, 300, 1, 5060029),
-- 究極的黑暗防具魔力卷軸
(0, 2616217, -1, 120, 1, 5060029),
-- 究極的黑暗單手武器攻擊力卷軸
(0, 2613068, -1, 80, 1, 5060029),
-- 究極的黑暗寵物裝備攻擊力卷軸
(0, 2048825, -1, 80, 1, 5060029),
-- 究極的黑暗寵物裝備魔力卷軸
(0, 2048826, -1, 20, 1, 5060029);
INSERT INTO raffle_pool(period, itemId, quantity, chance, smega, type) VALUES
-- 常駐獎池
-- 嫩寶
(0, 2870000, -1, 1000, 0, 5537000),
-- 藍寶
(0, 2870001, -1, 1500, 0, 5537000),
-- 菇菇仔
(0, 2870002, -1, 2000, 0, 5537000),
-- 木妖
(0, 2870003, -1, 4000, 0, 5537000),
-- 紅寶
(0, 2870004, -1, 1500, 0, 5537000),
-- 芽芽花盆
(0, 2870005, -1, 1500, 0, 5537000),
-- 喇叭花花盆
(0, 2870006, -1, 2000, 0, 5537000),
-- 葡萄酒瓶
(0, 2870007, -1, 3000, 0, 5537000),
-- 綠水靈
(0, 2870008, -1, 4000, 0, 5537000),
-- 綠菇菇
(0, 2870009, -1, 4000, 0, 5537000),
-- 黑木妖
(0, 2870010, -1, 10000, 0, 5537000),
-- 挫折的綠菇菇
(0, 2870011, -1, 4000, 0, 5537000),
-- 三眼章魚
(0, 2870012, -1, 10000, 0, 5537000),
-- 斧木妖
(0, 2870013, -1, 10000, 0, 5537000),
-- 發芽木妖
(0, 2870014, -1, 10000, 0, 5537000),
-- 奸笑的發芽木妖
(0, 2870015, -1, 10000, 0, 5537000),
-- 巡邏機器人
(0, 2870016, -1, 10000, 0, 5537000),
-- 奇怪的里程碑
(0, 2870017, -1, 10000, 0, 5537000),
-- 大蛇王
(0, 2870018, -1, 8000, 0, 5537000),
-- 肥肥
(0, 2870019, -1, 5000, 0, 5537000),
-- 緞帶肥肥
(0, 2870020, -1, 4500, 0, 5537000),
-- 菇菇寶貝
(0, 2870021, -1, 4000, 0, 5537000),
-- 藍水靈
(0, 2870022, -1, 4000, 0, 5537000),
-- 藍色緞帶肥肥
(0, 2870023, -1, 4500, 0, 5537000),
-- 奇怪的肥肥
(0, 2870024, -1, 4500, 0, 5537000),
-- 刺菇菇
(0, 2870034, -1, 10000, 0, 5537000),
-- 沙漠毒蠍
(0, 2870035, -1, 10000, 0, 5537000),
-- 黑斧木妖
(0, 2870036, -1, 10000, 0, 5537000),
-- 青蛇
(0, 2870037, -1, 3000, 0, 5537000),
-- 竊水賊
(0, 2870038, -1, 10000, 0, 5537000),
-- 垃圾桶
(0, 2870039, -1, 10000, 0, 5537000),
-- 路燈
(0, 2870040, -1, 10000, 0, 5537000),
-- 巡邏機器人S
(0, 2870041, -1, 10000, 0, 5537000),
-- 紅寶王
(0, 2870042, -1, 4000, 0, 5537000),
-- 藍菇菇
(0, 2870043, -1, 4000, 0, 5537000),
-- 哭泣的藍菇菇
(0, 2870044, -1, 4000, 0, 5537000),
-- 火獨眼獸
(0, 2870045, -1, 10000, 0, 5537000),
-- 殭屍菇菇
(0, 2870046, -1, 4000, 0, 5537000),
-- 黑肥肥
(0, 2870047, -1, 4500, 0, 5537000),
-- 綠海馬
(0, 2870048, -1, 10000, 0, 5537000),
-- 黃金海馬
(0, 2870049, -1, 10000, 0, 5537000),
-- 獨角尼莫
(0, 2870050, -1, 10000, 0, 5537000),
-- 海膽
(0, 2870051, -1, 1000, 0, 5537000),
-- 泡泡魚
(0, 2870052, -1, 10000, 0, 5537000),
-- 木面怪人
(0, 2870053, -1, 10000, 0, 5537000),
-- 石面怪人
(0, 2870054, -1, 10000, 0, 5537000),
-- 膽小的黑肥肥
(0, 2870055, -1, 4500, 0, 5537000),
-- 爍展艾伊
(0, 2870056, -1, 10000, 0, 5537000),
-- 沼澤爛泥怪物
(0, 2870057, -1, 10000, 0, 5537000),
-- 煩躁的殭屍菇菇
(0, 2870058, -1, 4500, 0, 5537000),
-- 花鯰魚
(0, 2870059, -1, 10000, 0, 5537000),
-- 蝙蝠
(0, 2870060, -1, 3000, 0, 5537000),
-- 幼紅獨角獅
(0, 2870079, -1, 6000, 0, 5537000),
-- 幼黃獨角獅
(0, 2870080, -1, 6000, 0, 5537000),
-- 幼藍獨角獅
(0, 2870081, -1, 6000, 0, 5537000),
-- 叛徒菇菇仔
(0, 2870108, -1, 4000, 0, 5537000),
-- 毒菇
(0, 2870109, -1, 10000, 0, 5537000),
-- 中毒的肥肥
(0, 2870110, -1, 4000, 0, 5537000),
-- 頭盔企鵝王
(0, 2870111, -1, 10000, 0, 5537000),
-- 親衛隊企鵝王
(0, 2870112, -1, 10000, 0, 5537000),
-- 葛雷雪吉拉和企鵝國王
(0, 2870113, -1, 5000, 0, 5537000),
-- 黃金雪吉拉和企鵝國王
(0, 2870114, -1, 5000, 0, 5537000),
-- 純白雪吉拉和企鵝國王
(0, 2870115, -1, 5000, 0, 5537000),
-- 草莓珍奶
(0, 2870117, -1, 5000, 0, 5537000),
-- 珍珠奶茶
(0, 2870118, -1, 5000, 0, 5537000),
-- 抹茶珍奶
(0, 2870119, -1, 5000, 0, 5537000),
-- 雪吉拉娃娃機
(0, 2870120, -1, 5000, 0, 5537000),
-- 小企鵝王娃娃機
(0, 2870121, -1, 5000, 0, 5537000),
-- 變身娃娃機
(0, 2870122, -1, 5000, 0, 5537000),
-- 變身娃娃機
(0, 2870123, -1, 5000, 0, 5537000),
-- 鋼鐵穆太
(0, 2870124, -1, 10000, 0, 5537000),
-- 強化鋼鐵穆太
(0, 2870125, -1, 10000, 0, 5537000),
-- 鋰礦穆太
(0, 2870126, -1, 10000, 0, 5537000),
-- 土龍
(0, 2870127, -1, 10000, 0, 5537000),
-- 鋼之肥肥
(0, 2870134, -1, 10000, 0, 5537000),
-- 菇菇寶貝
(0, 2870021, -1, 4000, 0, 5537000),
-- 柔道貓熊
(0, 2870241, -1, 10000, 0, 5537000),
-- 鱷魚克洛克
(0, 2870242, -1, 10000, 0, 5537000),
-- 船員克魯
(0, 2870244, -1, 10000, 0, 5537000),
-- 魔龍
(0, 2870249, -1, 10000, 0, 5537000),
-- 冰龍
(0, 2870256, -1, 10000, 0, 5537000),
-- 黑龍
(0, 2870257, -1, 10000, 0, 5537000),
-- 橡木甲蟲
(0, 2870274, -1, 10000, 0, 5537000),
-- 金屬甲蟲
(0, 2870275, -1, 10000, 0, 5537000),
-- 月牙牛魔王
(0, 2870279, -1, 10000, 0, 5537000),
-- 長槍牛魔王
(0, 2870280, -1, 10000, 0, 5537000),
-- 大副凱丁
(0, 2870283, -1, 10000, 0, 5537000),
-- 萊西
(0, 2870289, -1, 10000, 0, 5537000),
-- 黑暗萊西
(0, 2870290, -1, 10000, 0, 5537000),
-- 暗黑半人馬
(0, 2870316, -1, 10000, 0, 5537000),
-- 火焰半人馬
(0, 2870317, -1, 10000, 0, 5537000),
-- 寒冰半人馬
(0, 2870318, -1, 10000, 0, 5537000),
-- 邪惡綿羊
(0, 2870319, -1, 10000, 0, 5537000),
-- 惡魔綿羊
(0, 2870320, -1, 10000, 0, 5537000),
-- [★] 煉獄獵犬
(0, 2870323, -1, 10000, 0, 5537000),
-- 骨骸魚
(0, 2870324, -1, 10000, 0, 5537000),
-- 藍色雙角龍
(0, 2870325, -1, 10000, 0, 5537000),
-- 暗黑三角龍
(0, 2870326, -1, 10000, 0, 5537000),
-- 總理大臣
(0, 2870116, -1, 1000, 0, 5537000),
-- 第一期主打 ★~萌獸系統，正式推出！★ 隨時陪你，一起在楓谷冒險吧！
-- 琉
(1, 2870602, -1, 1000, 1, 5537000),
-- 璃
(1, 2870603, -1, 1000, 1, 5537000),
-- 第二期主打 【萌獸卡牌包-暗黑騎士團】暗黑系的萌
-- 米哈逸
(2, 2870479, -1, 1000, 1, 5537000),
-- 奧茲
(2, 2870480, -1, 1000, 1, 5537000),
-- 伊麗娜
(2, 2870481, -1, 1000, 1, 5537000),
-- 伊卡勒特
(2, 2870482, -1, 1000, 1, 5537000),
-- 鷹眼
(2, 2870483, -1, 1000, 1, 5537000),
-- 神獸
(2, 2870484, -1, 1000, 1, 5537000),
-- 西格諾斯
(2, 2870485, -1, 500, 1, 5537000),
-- 第三期主打 【萌獸卡牌包-降魔十字軍】超大裘可幫你壯聲勢！
-- 雪莉
(3, 2871094, -1, 1000, 1, 5537000),
-- 克勞烏
(3, 2871095, -1, 1000, 1, 5537000),
-- 裘可
(3, 2871094, -1, 500, 1, 5537000),
-- 第四期主打 【萌獸卡牌包 – 俏皮皮卡啾】原來是皮卡~~啾！
-- 皮卡啾
(4, 2870379, -1, 500, 1, 5537000),
-- 迷你啾
(4, 2870380, -1, 700, 1, 5537000),
-- 魂
(4, 2870459, -1, 1000, 1, 5537000),
-- 火牢術
(4, 2870460, -1, 1000, 1, 5537000),
-- 暴風
(4, 2870461, -1, 1000, 1, 5537000),
-- 黑暗雷鳥
(4, 2870462, -1, 1000, 1, 5537000),
-- 閃電
(4, 2870463, -1, 1000, 1, 5537000),
-- 第五期主打 【萌獸卡牌包 – 偵探團BOSS萌獸】巨型萌獸現身！！
-- 最終型態涅涅
(5, 2872048, -1, 1000, 1, 5537000),
-- 最終型態嘟嘟
(5, 2872049, -1, 1000, 1, 5537000),
-- 鈴鈴頭目
(5, 2872050, -1, 500, 1, 5537000),
-- 第六期主打 【萌獸卡牌包 –魔族大軍襲來！！】黑暗壟罩！！
-- 魔族士兵
(6, 2870679, -1, 1000, 1, 5537000),
-- 墮落魔族斧頭兵
(6, 2870680, -1, 1000, 1, 5537000),
-- 墮落魔族盾牌兵
(6, 2870681, -1, 1000, 1, 5537000),
-- 墮落魔族強化劍兵
(6, 2870682, -1, 1000, 1, 5537000),
-- 墮落魔族強化盾牌兵
(6, 2870683, -1, 1000, 1, 5537000),
-- 墮落魔族強化狼旗手
(6, 2870684, -1, 1000, 1, 5537000),
-- 遺跡魔蠍
(6, 2870685, -1, 1000, 1, 5537000),
-- 惡魔穆魯昆
(6, 2870686, -1, 1000, 1, 5537000),
-- 惡魔穆庫魯
(6, 2870687, -1, 1000, 1, 5537000),
-- 第七期主打 【萌獸卡牌包 – 戴米安強襲！！】
-- 戴米安
(7, 2870688, -1, 500, 1, 5537000),
-- 第八期主打 【萌獸卡牌包 – 戰姬蓮華！！】
-- 蓮華
(8, 2870763, -1, 500, 1, 5537000),
-- 烏鴉
(8, 2871000, -1, 1000, 1, 5537000),
-- 貍貓
(8, 2871001, -1, 1000, 1, 5537000),
-- 雲狐
(8, 2871002, -1, 1000, 1, 5537000),
-- 遊魂
(8, 2871003, -1, 1000, 1, 5537000),
-- 雪狐
(8, 2871004, -1, 1000, 1, 5537000),
-- 雪女
(8, 2871011, -1, 1000, 1, 5537000),
-- 第九期主打 【萌獸卡牌包 – 梅格耐斯瘋搗蛋】
-- 梅格耐斯
(9, 2870571, -1, 500, 1, 5537000),
-- 地獄木馬
(9, 2872019, -1, 1000, 1, 5537000),
-- 巫毒娃娃
(9, 2872022, -1, 1000, 1, 5537000),
-- 邪術娃娃
(9, 2872023, -1, 1000, 1, 5537000),
-- 南瓜幽靈
(9, 2872020, -1, 1000, 1, 5537000),
-- 幽靈
(9, 2872021, -1, 1000, 1, 5537000),
-- 貪吃鬼
(9, 2872018, -1, 1000, 1, 5537000),
-- 惡小丑傑克
(9, 2872017, -1, 1000, 1, 5537000),
-- 第十期主打 【萌獸卡牌包 – 克拉奇亞燃燒之魂】
-- 冰凍的孤獨
(10, 2870791, -1, 1000, 1, 5537000),
-- 冰凍的恐懼
(10, 2870792, -1, 1000, 1, 5537000),
-- 冰凍的憤怒
(10, 2870793, -1, 1000, 1, 5537000),
-- 冰凍的不安
(10, 2870794, -1, 1000, 1, 5537000),
-- 冰凍的虛無
(10, 2870795, -1, 1000, 1, 5537000),
-- 燃燒的孤獨
(10, 2870796, -1, 1000, 1, 5537000),
-- 燃燒的恐怖
(10, 2870797, -1, 1000, 1, 5537000),
-- 燃燒的憤怒
(10, 2870798, -1, 1000, 1, 5537000),
-- 燃燒的不安
(10, 2870799, -1, 1000, 1, 5537000),
-- 燃燒的虛無
(10, 2870800, -1, 1000, 1, 5537000),
-- 忍受孤獨
(10, 2870801, -1, 1000, 1, 5537000),
-- 入侵的恐怖
(10, 2870802, -1, 1000, 1, 5537000),
-- 入侵的憤怒
(10, 2870803, -1, 1000, 1, 5537000),
-- 入侵的不安
(10, 2870804, -1, 1000, 1, 5537000),
-- 入侵的虛無
(10, 2870805, -1, 1000, 1, 5537000),
-- 第十一期主打 【萌獸卡牌包 – 班班的奧術之河旅程】
-- 喜悅艾爾達斯
(11, 2870664, -1, 1000, 1, 5537000),
-- 憤怒的艾爾達斯
(11, 2870672, -1, 1000, 1, 5537000),
-- 火焰艾爾達斯
(11, 2870673, -1, 1000, 1, 5537000),
-- 安息的艾爾達斯
(11, 2870689, -1, 1000, 1, 5537000),
-- 猶娜娜
(11, 2870690, -1, 1000, 1, 5537000),
-- 幼年烏普洛
(11, 2870691, -1, 1000, 1, 5537000),
-- 克利拉
(11, 2870692, -1, 1000, 1, 5537000),
-- 族長巴薩克
(11, 2870693, -1, 1000, 1, 5537000),
-- 混沌班班
(11, 2870577, -1, 500, 1, 5537000),
-- 第十二期主打 【萌獸卡牌包 –成為露希妲的夥伴吧】
-- 清潔劑
(12, 2870694, -1, 1000, 1, 5537000),
-- 紙袋後街居民
(12, 2870695, -1, 1000, 1, 5537000),
-- 卡利納
(12, 2870696, -1, 1000, 1, 5537000),
-- 紅眼石像怪
(12, 2870697, -1, 1000, 1, 5537000),
-- 夢中的露希妲
(12, 2870698, -1, 100, 1, 5537000),
-- 第十三期主打 【萌獸卡牌包 –戰國濃姬華麗登場!】
-- 瀧川一益
(13, 2870529, -1, 1000, 1, 5537000),
-- 織田軍武士隊長
(13, 2870530, -1, 1000, 1, 5537000),
-- 織田軍武士
(13, 2870531, -1, 1000, 1, 5537000),
-- 織田軍上級偵察兵
(13, 2870532, -1, 1000, 1, 5537000),
-- 織田軍偵察兵
(13, 2870537, -1, 1000, 1, 5537000),
-- 織田步兵
(13, 2870538, -1, 1000, 1, 5537000),
-- 織田軍陰陽師
(13, 2870534, -1, 1000, 1, 5537000),
-- 濃姬
(13, 2870761, -1, 500, 1, 5537000),
-- 翁羅將軍
(13, 2870762, -1, 800, 1, 5537000),
-- 彌弄矩
(13, 2870765, -1, 800, 1, 5537000),
-- 第十四期主打 【萌獸卡牌包 –戰國武將森蘭丸登場】
-- 森蘭丸
(14, 2870528, -1, 500, 1, 5537000),
-- 第十五期主打 【萌獸卡牌包 –黑暗精靈史烏】
-- 卡翁
(15, 2870699, -1, 1000, 1, 5537000),
-- 史烏
(15, 2870700, -1, 500, 1, 5537000),
-- 史烏
(15, 2870701, -1, 500, 1, 5537000),
-- 第十六期主打 【萌獸卡牌包–超萌迷你殺人鯨】
-- 小殺人鯨
(16, 2870847, -1, 500, 1, 5537000),
-- 水精靈
(16, 2870837, -1, 1000, 1, 5537000),
-- 陽光精靈
(16, 2870838, -1, 1000, 1, 5537000),
-- 閃電雲精靈
(16, 2870839, -1, 1000, 1, 5537000),
-- 猛毒的精靈
(16, 2870840, -1, 1000, 1, 5537000),
-- 不協調精靈
(16, 2870841, -1, 1000, 1, 5537000),
-- 精靈殘骸
(16, 2870843, -1, 500, 1, 5537000),
-- 第十七期主打 【萌獸卡牌包 - 殺人鯨傲嬌登場】
-- 殺人鯨
(17, 2870853, -1, 500, 1, 5537000),
-- 小梅格耐斯
(17, 2870844, -1, 500, 1, 5537000),
-- 小希拉
(17, 2870845, -1, 500, 1, 5537000),
-- 第十八期主打 【萌獸卡牌包 - 死神姆勒姆勒降臨】
-- 惡靈
(18, 2870854, -1, 500, 1, 5537000),
-- 偉大的姆勒姆勒
(18, 2870855, -1, 500, 1, 5537000),
-- 劍士小姆勒
(18, 2870856, -1, 1000, 1, 5537000),
-- 法師小姆勒
(18, 2870857, -1, 1000, 1, 5537000),
-- 弓箭手小姆勒
(18, 2870858, -1, 1000, 1, 5537000),
-- 盜賊小姆勒
(18, 2870859, -1, 1000, 1, 5537000),
-- 海盜小姆勒
(18, 2870860, -1, 1000, 1, 5537000),
-- 第十九期主打 【萌獸卡牌包 - 阿卡&獅子縮小了!】
-- 小凡雷恩
(19, 2870848, -1, 1000, 1, 5537000),
-- 小阿卡伊農
(19, 2870846, -1, 1000, 1, 5537000),
-- 第二十期主打 【萌獸卡牌包 - 跟桃樂絲野餐去!】
-- 桃樂絲
(20, 2870863, -1, 500, 1, 5537000),
-- 桃樂絲的幻影
(20, 2870864, -1, 500, 1, 5537000),
-- 第二十一期主打 【萌獸卡牌包 - 被實驗的拉尼亞】
-- 黑化拉尼亞
(21, 2870862, -1, 500, 1, 5537000),
-- Mr.海查德
(21, 2870870, -1, 1000, 1, 5537000),
-- 漂泊者惹事份子
(21, 2870871, -1, 1000, 1, 5537000),
-- Mr.海查德的部下A
(21, 2870872, -1, 1000, 1, 5537000),
-- Mr.海查德的部下B
(21, 2870873, -1, 1000, 1, 5537000),
-- 第二十二期主打 【萌獸卡牌包 - 噩夢之主再臨】
-- 露希妲_飛行階段
(22, 2870861, -1, 100, 1, 5537000),
-- 第二十三期主打 【萌獸卡牌包 - 戴米安邪氣登場】
-- 普通_戴米安
(23, 2870878, -1, 500, 1, 5537000),
-- 第二十四期主打 【萌獸卡牌包 - 魔力湧現的希拉】
-- 困難希拉
(24, 2870845, -1, 500, 1, 5537000),
-- 第二十五期主打 【萌獸卡牌包 - 我把BOSS們變小了!!】
-- 小西格諾斯
(25, 2870874, -1, 100, 1, 5537000),
-- 小殘暴炎魔
(25, 2870875, -1, 500, 1, 5537000),
-- 小闇黑龍王
(25, 2870876, -1, 500, 1, 5537000),
-- 第二十六期主打 【萌獸卡牌包 - 魔菈斯的深淵】
-- 魔王幽靈
(26, 2870883, -1, 700, 1, 5537000),
-- 被儀式捲走的弓兵
(26, 2870884, -1, 1000, 1, 5537000),
-- 被儀式捲走的魔法師
(26, 2870885, -1, 1000, 1, 5537000),
-- 被儀式捲走的禁衛兵
(26, 2870886, -1, 1000, 1, 5537000),
-- 被儀式捲走的錘子兵
(26, 2870887, -1, 1000, 1, 5537000),
-- 第二十七期主打 【萌獸卡牌包 - 鏡之夢魘】
-- 軍團長威爾_1階段
(27, 2870897, -1, 500, 1, 5537000),
-- 黑蜘蛛
(27, 2870890, -1, 1000, 1, 5537000),
-- 蜘蛛女
(27, 2870891, -1, 1000, 1, 5537000),
-- 光之注視者
(27, 2870892, -1, 1000, 1, 5537000),
-- 暗之注視者
(27, 2870893, -1, 1000, 1, 5537000),
-- 光之執行者
(27, 2870894, -1, 1000, 1, 5537000),
-- 暗之執行者
(27, 2870895, -1, 1000, 1, 5537000),
-- 守護太初的某個東西
(27, 2870896, -1, 700, 1, 5537000),
-- 第二十八期主打 【萌獸卡牌包 - 鏡之夢魘】
-- 軍團長威爾_2階段
(28, 2870898, -1, 500, 1, 5537000),
-- 黑騎士魔凱丁
(28, 2870923, -1, 700, 1, 5537000),
-- 瘋狂魔法師卡利亞因
(28, 2870924, -1, 700, 1, 5537000),
-- 突擊型 CQ57
(28, 2870925, -1, 700, 1, 5537000),
-- 人類獵人朱萊
(28, 2870926, -1, 700, 1, 5537000),
-- 吵架狂普拉德
(28, 2870927, -1, 700, 1, 5537000),
-- 第二十九期主打 【萌獸卡牌包 - 群魔熱舞時間到】
-- 巨大黑暗靈魂
(29, 2870928, -1, 500, 1, 5537000),
-- 萬聖節南瓜燈
(29, 2870929, -1, 1000, 1, 5537000),
-- 惡魔熊
(29, 2870930, -1, 1000, 1, 5537000),
-- 鮮奶油團
(29, 2870931, -1, 1000, 1, 5537000),
-- 香甜的巧克力奶油
(29, 2870932, -1, 1000, 1, 5537000),
-- 第三十期主打 【萌獸卡牌包 - 復古世界的王者】
-- 復古世界魔王
(30, 2870933, -1, 1000, 1, 5537000),
-- 復古世界石巨人
(30, 2870934, -1, 1000, 1, 5537000),
-- 復古世界哥布林弓箭手
(30, 2870935, -1, 1000, 1, 5537000),
-- 第三十一期主打 【萌獸卡牌包 - 吞噬光的黑暗】
-- 內心的憤怒
(31, 2870944, -1, 500, 1, 5537000),
-- 戰士幽靈
(31, 2870945, -1, 1000, 1, 5537000),
-- 魔法師幽靈
(31, 2870946, -1, 1000, 1, 5537000),
-- 死神幽靈
(31, 2870947, -1, 1000, 1, 5537000),
-- 奧門
(31, 2870948, -1, 1000, 1, 5537000),
-- 大師奧門
(31, 2870949, -1, 1000, 1, 5537000),
-- 第三十二期主打 【萌獸卡牌包 - 迷你小英雄~再次對抗黑暗】
-- 小夜光(光)
(32, 2870955, -1, 200, 1, 5537000),
-- 小夜光(黑暗)
(32, 2870956, -1, 200, 1, 5537000),
-- 小夜光(平衡)
(32, 2870957, -1, 200, 1, 5537000),
-- 小精靈遊俠
(32, 2870958, -1, 200, 1, 5537000),
-- 小幻影俠盜
(32, 2870959, -1, 200, 1, 5537000),
-- 小隱月
(32, 2870960, -1, 200, 1, 5537000),
-- 第三十三期主打 【萌獸卡牌包 - 復甦的亡靈】
-- 死靈史烏
(33, 2870941, -1, 500, 1, 5537000),
-- 死靈戴米安
(33, 2870942, -1, 500, 1, 5537000),
-- 沉默的騎士
(33, 2870936, -1, 1000, 1, 5537000),
-- 沉默的流浪者
(33, 2870938, -1, 1000, 1, 5537000),
-- 絕望的翅膀
(33, 2870939, -1, 1000, 1, 5537000),
-- 第三十四期主打 【真．希拉】萌獸卡牌包更新
-- 真希拉
(34, 2870879, -1, 500, 1, 5537000),
-- 沉默的騎士
(34, 2870937, -1, 1000, 1, 5537000),
-- 絕望的刀刃
(34, 2870940, -1, 1000, 1, 5537000),
-- 第三十五期主打 【萌獸卡牌包更新】艾畢奈雅
-- 粉末蝴蝶
(35, 2870963, -1, 1000, 1, 5537000),
-- 光明妖精
(35, 2870964, -1, 1000, 1, 5537000),
-- 遠古妖精
(35, 2870965, -1, 1000, 1, 5537000),
-- 白色銀喉長尾山雀
(35, 2870966, -1, 1000, 1, 5537000),
-- 變形銀喉長尾山雀
(35, 2870967, -1, 1000, 1, 5537000),
-- 艾畢奈亞
(35, 2870968, -1, 500, 1, 5537000),
-- 第三十六期主打 【萌獸卡牌包】喵怪仙人與守護靈
-- 風之守護靈
(36, 2870881, -1, 1000, 1, 5537000),
-- 雲之守護靈
(36, 2870882, -1, 1000, 1, 5537000),
-- 喵怪仙人(男)
(36, 2870974, -1, 500, 1, 5537000),
-- 喵怪仙人(女)
(36, 2870975, -1, 500, 1, 5537000),
-- 喵怪仙人(動物型)
(36, 2870976, -1, 500, 1, 5537000),
-- 第三十七期主打 【萌獸卡牌包】黑暗的爪牙
-- 逆轉黑暗靈魂
(37, 2870980, -1, 1000, 1, 5537000),
-- 虛空的爪牙
(37, 2870981, -1, 1000, 1, 5537000),
-- 黃昏的爪牙
(37, 2870982, -1, 1000, 1, 5537000),
-- 第三十八期主打 【萌獸卡牌包】親衛隊長頓凱爾!
-- 親衛隊長頓凱爾
(38, 2870950, -1, 800, 1, 5537000),
-- 第三十九期主打 【萌獸隨機箱】蛇髮女妖!
-- 梅杜莎
(39, 2870993, -1, 800, 1, 5537000),
-- 斯泰諾
(39, 2870994, -1, 800, 1, 5537000),
-- 耶律阿勒
(39, 2870995, -1, 800, 1, 5537000),
-- 第四十期主打 【萌獸卡牌包】麻煩製造者!
-- 打倒後不出手的麻煩製造者
(40, 2871177, -1, 800, 1, 5537000),
-- 單戀的麻煩製造者
(40, 2871178, -1, 800, 1, 5537000),
-- 雙重人格的麻煩製造者
(40, 2871179, -1, 800, 1, 5537000),
-- 貪念的麻煩製造者
(40, 2871180, -1, 800, 1, 5537000),
-- 天生單身的麻煩製造者
(40, 2871181, -1, 800, 1, 5537000),
-- 魷魚的麻煩製造者
(40, 2871182, -1, 800, 1, 5537000),
-- 自尊心的麻煩製造者
(40, 2871183, -1, 800, 1, 5537000),
-- 第四十一期主打 【萌獸方塊大包裝】萌獸卡牌包同步更新！
-- 多利恩
(41, 2870996, -1, 1000, 1, 5537000),
-- 庫拉
(41, 2870997, -1, 1000, 1, 5537000),
-- 瑪蒙
(41, 2870998, -1, 1000, 1, 5537000),
-- 旋風多利恩
(41, 2870999, -1, 1000, 1, 5537000),
-- 飛翔里奧
(41, 2871188, -1, 1000, 1, 5537000),
-- 潘斯
(41, 2871189, -1, 1000, 1, 5537000),
-- 海盜熊
(41, 2871190, -1, 1000, 1, 5537000),
-- 斯卡里恩
(41, 2871191, -1, 1000, 1, 5537000),
-- 塔爾加
(41, 2871192, -1, 1000, 1, 5537000);
INSERT INTO raffle_pool(period, itemId, quantity, chance, smega, type) VALUES
-- 常駐獎池
-- 特別附加潛在能力賦予卷軸
(0, 2048306, -1, 2000, 1, 5060025),
-- 輪迴星火130級
(0, 2048702, -1, 10000, 0, 5060025),
-- 輪迴星火140級
(0, 2048703, -1, 6000, 0, 5060025),
-- 輪迴星火150級
(0, 2048704, -1, 5000, 0, 5060025),
-- 銀色附加烙印的印章
(0, 2048303, -1, 10000, 0, 5060025),
-- 永遠的輪迴星火
(0, 2048717, -1, 3000, 0, 5060025),
-- 純白的卷軸5%
(0, 2049027, -1, 10000, 0, 5060025),
-- 純白的咒文書10%
(0, 2049004, -1, 10000, 0, 5060025),
-- 金色附加烙印的印章
(0, 2048222, -1, 10000, 0, 5060025),
-- 純白的咒文書100%
(0, 2049032, -1, 3000, 0, 5060025),
-- 完美回真卷軸50%
(0, 2049616, -1, 10000, 0, 5060025),
-- 罕見潛在能力卷軸80%
(0, 2049750, -1, 3000, 0, 5060025),
-- 完美附加烙印的印章
(0, 2048304, -1, 8000, 0, 5060025),
-- 黃金鐵鎚100%
(0, 2470015, -1, 10000, 0, 5060025),
-- 銀烙印的印章
(0, 2049501, -1, 10000, 0, 5060025),
-- 金烙印的印章
(0, 2049500, -1, 8000, 0, 5060025),
-- 西格諾斯的靈魂寶珠
(0, 2591280, -1, 5000, 0, 5060025),
-- 完美烙印的印章
(0, 2049506, -1, 8000, 0, 5060025),
-- 皮卡啾的靈魂寶珠
(0, 2591003, -1, 5000, 0, 5060025),
-- 武公的靈魂寶珠
(0, 2591008, -1, 300, 1, 5060025),
-- 梅格耐斯的靈魂寶珠
(0, 2591287, -1, 5000, 0, 5060025),
-- 艾畢奈亞的靈魂寶珠
(0, 2591282, -1, 1000, 1, 5060025);
INSERT INTO raffle_pool(period, itemId, quantity, chance, smega, type) VALUES
-- 常駐獎池
-- 神秘冥界武器變換箱
(0, 2630626, -1, 400, 1, 5060048),
-- 神秘冥界防具變換箱
(0, 2630627, -1, 450, 1, 5060048),
-- 星力16星強化券
(0, 2049385, -1, 1500, 1, 5060048),
-- 星力15星強化券
(0, 2049384, -1, 1600, 1, 5060048),
-- 星力14星強化券
(0, 2049383, -1, 1700, 1, 5060048),
-- 鈦之心
(0, 1672040, -1, 1000, 1, 5060048),
-- 妖精之心
(0, 1672040, -1, 1100, 1, 5060048),
-- 露希妲靈魂寶珠
(0, 2591600, -1, 3000, 1, 5060048),
-- 艾畢奈亞的靈魂寶珠
(0, 2591282, -1, 800, 1, 5060048),
-- 睿智葫蘆
(0, 2630017, -1, 250, 1, 5060048),
-- 航海師武器變換箱
(0, 2630568, -1, 1000, 1, 5060048),
-- 航海師防具變換箱
(0, 2630569, -1, 1000, 1, 5060048),
-- 航海師文字短杖
(0, 1372222, -1, 1500, 1, 5060048),
-- 航海師混合弓
(0, 1452252, -1, 1500, 1, 5060048),
-- 航海師強弩
(0, 1462239, -1, 1500, 1, 5060048),
-- 航海師雙弩槍
(0, 1522138, -1, 1500, 1, 5060048),
-- 航海師閃耀之杖
(0, 1212115, -1, 1500, 1, 5060048),
-- 航海師之杖
(0, 1252099, -1, 1500, 1, 5060048),
-- 航海師文字長杖
(0, 1382259, -1, 1500, 1, 5060048),
-- 航海師魔法護腕
(0, 1282016, -1, 1500, 1, 5060048),
-- 航海師扇子
(0, 1552110, -1, 1500, 1, 5060048),
-- 航海師ESP限制器
(0, 1262017, -1, 1500, 1, 5060048),
-- 航海師重劍
(0, 1402251, -1, 1500, 1, 5060048),
-- 航海師死亡魔劍
(0, 1232109, -1, 1500, 1, 5060048),
-- 航海師軍刀
(0, 1302333, -1, 1500, 1, 5060048),
-- 航海師雙刃斧
(0, 1312199, -1, 1500, 1, 5060048),
-- 航海師十字錘
(0, 1322250, -1, 1500, 1, 5060048),
-- 航海師重拳槍
(0, 1582017, -1, 1500, 1, 5060048),
-- 航海師戰斧
(0, 1412177, -1, 1500, 1, 5060048),
-- 航海師戰錘
(0, 1422184, -1, 1500, 1, 5060048),
-- 航海師穿刺槍
(0, 1432214, -1, 1500, 1, 5060048),
-- 航海師戰戟
(0, 1442268, -1, 1500, 1, 5060048),
-- 航海師手杖
(0, 1362135, -1, 1500, 1, 5060048),
-- 航海師鐵刀
(0, 1542108, -1, 1500, 1, 5060048),
-- 航海師鎖鏈
(0, 1272016, -1, 1500, 1, 5060048),
-- 航海師短刀
(0, 1332274, -1, 1500, 1, 5060048),
-- 航海師雙刀
(0, 1342101, -1, 1500, 1, 5060048),
-- 航海師指虎
(0, 1482216, -1, 1500, 1, 5060048),
-- 航海師復仇拳套
(0, 1472261, -1, 1500, 1, 5060048),
-- 航海師能量劍
(0, 1242116, -1, 1500, 1, 5060048),
(0, 1242120, -1, 1500, 1, 5060048),
-- 航海師靈魂射手
(0, 1222109, -1, 1500, 1, 5060048),
-- 航海師手槍
(0, 1492231, -1, 1500, 1, 5060048),
-- 航海師加農火砲
(0, 1532144, -1, 1500, 1, 5060048),
-- 航海師弓箭手套裝
(0, 1052888, -1, 1500, 1, 5060048),
-- 航海師弓箭手斗篷
(0, 1102795, -1, 1500, 1, 5060048),
-- 航海師弓箭手手套
(0, 1082638, -1, 1500, 1, 5060048),
-- 航海師弓箭手鞋
(0, 1073033, -1, 1500, 1, 5060048),
-- 航海師法師鞋
(0, 1073032, -1, 1500, 1, 5060048),
-- 航海師弓箭手肩膀
(0, 1152177, -1, 1500, 1, 5060048),
-- 航海師弓箭手帽
(0, 1004424, -1, 1500, 1, 5060048),
-- 航海師法師斗篷
(0, 1102794, -1, 1500, 1, 5060048),
-- 航海師法師手套
(0, 1082637, -1, 1500, 1, 5060048),
-- 航海師劍士手套
(0, 1082636, -1, 1500, 1, 5060048),
-- 航海師法師套裝
(0, 1052887, -1, 1500, 1, 5060048),
-- 航海師法師護肩
(0, 1152176, -1, 1500, 1, 5060048),
-- 航海師法師帽
(0, 1004423, -1, 1500, 1, 5060048),
-- 航海師劍士斗篷
(0, 1102775, -1, 1500, 1, 5060048),
-- 航海師盜賊披肩
(0, 1102796, -1, 1500, 1, 5060048),
-- 航海師劍士鞋
(0, 1073030, -1, 1500, 1, 5060048),
-- 航海師劍士套裝
(0, 1052882, -1, 1500, 1, 5060048),
-- 航海師劍士肩膀
(0, 1152174, -1, 1500, 1, 5060048),
-- 航海師劍士頭盔
(0, 1004422, -1, 1500, 1, 5060048),
-- 航海師盜賊帽
(0, 1004425, -1, 1500, 1, 5060048),
-- 航海師盜賊手套
(0, 1082639, -1, 1500, 1, 5060048),
-- 航海師盜賊鞋
(0, 1073034, -1, 1500, 1, 5060048),
-- 航海師盜賊套裝
(0, 1052889, -1, 1500, 1, 5060048),
-- 航海師盜賊肩膀
(0, 1152178, -1, 1500, 1, 5060048),
-- 航海師海盜肩膀
(0, 1152179, -1, 1500, 1, 5060048),
-- 航海師海盜披肩
(0, 1102797, -1, 1500, 1, 5060048),
-- 航海師海盜手套
(0, 1082640, -1, 1500, 1, 5060048),
-- 航海師海盜鞋
(0, 1073035, -1, 1500, 1, 5060048),
-- 航海師海盜套裝
(0, 1052890, -1, 1500, 1, 5060048),
-- 航海師海盜帽
(0, 1004426, -1, 1500, 1, 5060048),
-- 航海師古代之弓
(0, 1592019, -1, 1500, 1, 5060048),
-- 機器人商店使用卷 (30天)
(0, 2436755, -1, 3000, 1, 5060048),
-- 核心寶石20個交換券
(0, 2630606, -1, 1500, 1, 5060048),
-- 附加潛在能力賦予卷軸70%
(0, 2048305, -1, 10000, 0, 5060048),
-- 黃金鐵鎚 100%
(0, 2470007, -1, 6000, 0, 5060048),
-- 永遠的輪迴星火
(0, 2048717, -1, 4500, 0, 5060048),
-- 銀花戒指
(0, 1113149, -1, 10000, 0, 5060048),
-- 太初的水滴石
(0, 4001889, -1, 5000, 0, 5060048),
-- 奧術之河水滴石
(0, 4001878, -1, 2000, 0, 5060048),
-- 水中信紙眼飾
(0, 1022231, -1, 10000, 0, 5060048),
-- 凝聚力量的結晶石
(0, 1012478, -1, 10000, 0, 5060048),
-- 皇家暗黑合金護肩
(0, 1152170, -1, 10000, 0, 5060048),
-- 戴雅希杜斯耳環
(0, 1032241, -1, 10000, 0, 5060048),
-- 混沌闇黑龍王的項鍊
(0, 1122076, -1, 10000, 0, 5060048),
-- 金花草腰帶
(0, 1132272, -1, 10000, 0, 5060048),
-- 梅克奈特墜飾
(0, 1122254, -1, 10000, 0, 5060048),
-- 水晶愛心
(0, 1672019, -1, 6000, 0, 5060048),
-- 支配者墜飾
(0, 1122150, -1, 10000, 0, 5060048),
-- 星力13星強化券
(0, 2049382, -1, 2000, 0, 5060048),
-- 星力12星強化券
(0, 2049381, -1, 3000, 0, 5060048),
-- 鋰愛心
(0, 1672020, -1, 2500, 0, 5060048),
-- 黃金愛心
(0, 1672018, -1, 6000, 0, 5060048),
-- 強力的輪迴星火
(0, 2048716, -1, 4000, 0, 5060048),
-- 核心寶石15個交換券
(0, 2630605, -1, 1700, 0, 5060048),
-- 核心寶石10個交換券
(0, 2437035, -1, 2000, 0, 5060048),
-- 核心寶石5個交換券
(0, 2630603, -1, 2300, 0, 5060048),
-- 卷軸20格背包
(0, 2650004, -1, 6000, 0, 5060048),
-- 製作物品20格欄位包包
(0, 4330032, -1, 6000, 0, 5060048),
-- 製作書20格背包
(0, 2650003, -1, 6000, 0, 5060048),
-- 椅子20個欄位包包
(0, 3080014, -1, 6000, 0, 5060048),
-- 稱號 20格名片錢包
(0, 3080015, -1, 6000, 0, 5060048),
-- 微弱烙印的靈魂石
(0, 4001868, -1, 4000, 0, 5060048),
-- 幸運日卷軸
(0, 2530000, -1, 4000, 0, 5060048),
-- 稀有潛在能力卷軸80%
(0, 2049701, -1, 3500, 0, 5060048),
-- 回真卷軸50%
(0, 2049606, -1, 6000, 0, 5060048),
-- 初級能量硬幣(A級)
(0, 4001842, -1, 4000, 0, 5060048),
-- 裝飾欄 8格擴充券
(0, 2430770, -1, 2000, 0, 5060048),
-- 星力10星強化券
(0, 2049377, -1, 3100, 0, 5060048),
-- 星力11星強化券
(0, 2049380, -1, 3050, 0, 5060048),
-- 裝備欄 8格擴充券
(0, 2430768, -1, 2000, 0, 5060048),
-- 消耗欄 8格擴充券
(0, 2430769, -1, 2000, 0, 5060048),
-- 最上級祝福的秘藥
(0, 2003528, -1, 5000, 0, 5060048),
-- 其他欄 8格擴充券
(0, 2430771, -1, 2000, 0, 5060048),
-- 傳說中的英雄秘藥
(0, 2003526, -1, 5000, 0, 5060048),
-- 傳說中的祝福秘藥
(0, 2003529, -1, 5000, 0, 5060048),
-- 最上級英雄的秘藥
(0, 2003525, -1, 5000, 0, 5060048),
-- 忍耐的秘藥
(0, 2003547, -1, 5000, 0, 5060048),
-- 最上級力量強化秘藥
(0, 2003540, -1, 5000, 0, 5060048),
-- 最上級智慧強化秘藥
(0, 2003542, -1, 5000, 0, 5060048),
-- 最上級敏捷強化秘藥
(0, 2003544, -1, 5000, 0, 5060048),
-- 最上級幸運強化秘藥
(0, 2003546, -1, 5000, 0, 5060048),
-- 核心寶石4個交換券
(0, 2630602, -1, 2500, 0, 5060048),
-- 覺醒的秘藥
(0, 2003548, -1, 5000, 0, 5060048),
-- 無敵的秘藥
(0, 2003549, -1, 5000, 0, 5060048),
-- 經驗累積的秘藥
(0, 2003550, -1, 5000, 0, 5060048),
-- 獲得財物的秘藥
(0, 2003551, -1, 5000, 0, 5060048),
-- 凡雷恩的靈魂寶珠
(0, 2591005, -1, 5000, 0, 5060048),
-- 核心寶石3個交換券
(0, 2630601, -1, 2700, 0, 5060048),
-- 核心寶石2個交換券
(0, 2630600, -1, 2800, 0, 5060048),
-- 核心寶石1個交換券
(0, 5680505, -1, 3000, 0, 5060048),
-- 皮卡啾的靈魂寶珠
(0, 2591003, -1, 5000, 0, 5060048),
-- 殘暴炎魔的靈魂寶珠
(0, 2591006, -1, 5000, 0, 5060048),
-- 搖滾精神的靈魂寶珠
(0, 2591007, -1, 5000, 0, 5060048),
-- 闇黑龍王的靈魂寶珠
(0, 2591001, -1, 5000, 0, 5060048),
-- 雷克斯的靈魂寶珠
(0, 2591002, -1, 5000, 0, 5060048),
-- 龍騎士的靈魂寶珠
(0, 2591004, -1, 5000, 0, 5060048),
-- 亞尼的靈魂寶珠
(0, 2591009, -1, 5000, 0, 5060048),
-- 第一期主打
-- 內面暴風
(1, 2435150, -1, 300, 1, 5060048),
-- 內面耀光
(1, 2435149, -1, 300, 1, 5060048),
-- 角色更名券
(1, 2437563, -1, 500, 1, 5060048),
-- 第二期主打
-- 輪迴碑石
(2, 1202193, 1, 50, 1, 5060048),
-- 第三期主打
-- 燃燒之戒交換券
(3, 2437257, 5, 50, 1, 5060048),
-- 第四期主打
-- MX-131
(4, 1182136, -1, 350, 1, 5060048),
-- 黑翼胸章
(4, 1182158, -1, 150, 1, 5060048),
-- VIP休菲凱曼的黃金胸章道具
(4, 1182017, -1, 150, 1, 5060048),
-- 第五期主打
-- 露希妲耳環交換券
(5, 2438391, 10, 100, 1, 5060048),
-- 第六期主打
-- 增加墜飾欄位: 永久
(6, 2432845, -1, 3000, 1, 5060048),
-- 死神的項鍊
(6, 1122296, -1, 1000, 1, 5060048),
-- 準備好的精靈墜飾(90天)交換券
(6, 2434781, -1, 500, 1, 5060048),
-- 第七期主打
-- 小筱精靈圖騰
(7, 1202160, -1, 200, 1, 5060048),
-- 火之精靈圖騰
(7, 1202161, -1, 2000, 1, 5060048),
-- 水之精靈圖騰
(7, 1202162, -1, 2000, 1, 5060048),
-- 地之精靈圖騰
(7, 1202163, -1, 2000, 1, 5060048),
-- 風之精靈圖騰
(7, 1202164, -1, 2000, 1, 5060048),
-- 第八期主打
-- 幽暗戒指交換券
(8, 2434880, -1, 500, 1, 5060048),
-- 新星戒指
(8, 1112956, -1, 2000, 1, 5060048),
-- 森之守護者
(8, 1113132, -1, 2500, 1, 5060048),
-- 第九期主打
-- 苦行的戒指交換券
(9, 2437897, -1, 100, 1, 5060048),
-- 第十期主打
-- 天上的氣息
(10, 1113211, -1, 1000, 1, 5060048),
-- 戰神祝福
(10, 1113020, -1, 3500, 1, 5060048),
-- 骷顱頭戒指
(10, 1113083, -1, 3500, 1, 5060048),
-- 第十一期主打
-- 魔性的戒指
(11, 1113195, -1, 1000, 1, 5060048),
-- 強力的魔性戒指
(11, 1113196, -1, 1000, 1, 5060048),
-- 希拉的憤怒
(11, 1112952, -1, 2000, 1, 5060048),
-- 梅格耐斯的憤怒
(11, 1112951, -1, 2000, 1, 5060048),
-- 第十二期主打
-- 戰鬥機器人（男）交換券
(12, 2434038, -1, 500, 1, 5060048),
-- 戰鬥機器人（女）交換券
(12, 2434039, -1, 1000, 1, 5060048),
-- 透明機器人耳飾感應器
(12, 2892000, -1, 1000, 1, 5060048),
-- 女僕機器人交換券
(12, 2430879, -1, 3000, 1, 5060048),
-- 第十三期主打
-- 女武神之心
(13, 1672069, -1, 1000, 1, 5060048),
-- M-DAY機器心臟
(13, 1672075, -1, 500, 1, 5060048),
-- 第十四期主打
-- 武公的靈魂寶珠
(14, 2591008, -1, 2000, 1, 5060048),
-- 200 靈魂卷軸 100%
(14, 2590023, -1, 3000, 1, 5060048);
INSERT INTO raffle_pool(period, itemId, quantity, chance, smega, type) VALUES
-- 男髮型
-- 情歌王子
(0, 36440, -1, 10000, 0, 5150043),
-- 指揮家
(0, 36420, -1, 10000, 0, 5150043),
-- 復古側遮
(0, 33790, -1, 10000, 0, 5150043),
-- 拉斯塔
(0, 33410, -1, 10000, 0, 5150043),
-- 千鈞一髮
(0, 33490, -1, 10000, 0, 5150043),
-- 高額頭
(0, 30530, -1, 10000, 0, 5150043),
-- 運動短髮
(0, 30490, -1, 10000, 0, 5150043),
-- 時尚瀏海
(0, 30880, -1, 10000, 0, 5150043),
-- 馬桶蓋
(0, 30760, -1, 10000, 0, 5150043),
-- 迎風飄逸
(0, 30730, -1, 10000, 0, 5150043),
-- 捲翹瀏海
(0, 30510, -1, 10000, 0, 5150043),
-- 時髦順髮
(0, 30480, -1, 10000, 0, 5150043),
-- 旋風捲
(0, 30460, -1, 10000, 0, 5150043),
-- 黑人微捲
(0, 30320, -1, 10000, 0, 5150043),
-- 西瓜皮
(0, 30310, -1, 10000, 0, 5150043),
-- 左旋旁分
(0, 30260, -1, 10000, 0, 5150043),
-- 貓王
(0, 30220, -1, 10000, 0, 5150043),
-- 露耳清爽
(0, 30210, -1, 10000, 0, 5150043),
-- 短小捲
(0, 30910, -1, 10000, 0, 5150043),
-- 山本頭
(0, 30160, -1, 10000, 0, 5150043),
-- 女髮型
-- 天上佳人
(0, 41740, -1, 10000, 0, 5150043),
-- 俏麗髮辮
(0, 38000, -1, 10000, 0, 5150043),
-- 雙束
(0, 31900, -1, 10000, 0, 5150043),
-- 優雅女皇
(0, 34630, -1, 10000, 0, 5150043),
-- 嬰兒捲
(0, 34440, -1, 10000, 0, 5150043),
-- 千鈞一髮
(0, 34460, -1, 10000, 0, 5150043),
-- 蘋果短髮
(0, 31810, -1, 10000, 0, 5150043),
-- 迎風柔順
(0, 31640, -1, 10000, 0, 5150043),
-- 隨意盤
(0, 31490, -1, 10000, 0, 5150043),
-- 層次短剪
(0, 31340, -1, 10000, 0, 5150043),
-- 瑞迪亞
(0, 31610, -1, 10000, 0, 5150043),
-- 中國女孩
(0, 31470, -1, 10000, 0, 5150043),
-- 濃密直髮
(0, 31330, -1, 10000, 0, 5150043),
-- 堅強少女
(0, 31880, -1, 10000, 0, 5150043),
-- 俏麗捲辮
(0, 31230, -1, 10000, 0, 5150043),
-- 瀏海半遮
(0, 31220, -1, 10000, 0, 5150043),
-- 挑染長髮
(0, 31150, -1, 10000, 0, 5150043),
-- 傳統蒼龍
(0, 31140, -1, 10000, 0, 5150043),
-- 波浪馬尾
(0, 31110, -1, 10000, 0, 5150043),
-- 大波浪捲
(0, 31020, -1, 10000, 0, 5150043);
INSERT INTO raffle_pool(period, itemId, quantity, chance, smega, type) VALUES
-- 男髮型
-- 情歌王子
(0, 36440, -1, 10000, 0, 5150042),
-- 指揮家
(0, 36420, -1, 10000, 0, 5150042),
-- 復古側遮
(0, 33790, -1, 10000, 0, 5150042),
-- 拉斯塔
(0, 33410, -1, 10000, 0, 5150042),
-- 千鈞一髮
(0, 33490, -1, 10000, 0, 5150042),
-- 高額頭
(0, 30530, -1, 10000, 0, 5150042),
-- 運動短髮
(0, 30490, -1, 10000, 0, 5150042),
-- 時尚瀏海
(0, 30880, -1, 10000, 0, 5150042),
-- 馬桶蓋
(0, 30760, -1, 10000, 0, 5150042),
-- 迎風飄逸
(0, 30730, -1, 10000, 0, 5150042),
-- 捲翹瀏海
(0, 30510, -1, 10000, 0, 5150042),
-- 時髦順髮
(0, 30480, -1, 10000, 0, 5150042),
-- 旋風捲
(0, 30460, -1, 10000, 0, 5150042),
-- 黑人微捲
(0, 30320, -1, 10000, 0, 5150042),
-- 西瓜皮
(0, 30310, -1, 10000, 0, 5150042),
-- 左旋旁分
(0, 30260, -1, 10000, 0, 5150042),
-- 貓王
(0, 30220, -1, 10000, 0, 5150042),
-- 露耳清爽
(0, 30210, -1, 10000, 0, 5150042),
-- 短小捲
(0, 30910, -1, 10000, 0, 5150042),
-- 山本頭
(0, 30160, -1, 10000, 0, 5150042),
-- 女髮型
-- 天上佳人
(0, 41740, -1, 10000, 0, 5150042),
-- 俏麗髮辮
(0, 38000, -1, 10000, 0, 5150042),
-- 雙束
(0, 31900, -1, 10000, 0, 5150042),
-- 優雅女皇
(0, 34630, -1, 10000, 0, 5150042),
-- 嬰兒捲
(0, 34440, -1, 10000, 0, 5150042),
-- 千鈞一髮
(0, 34460, -1, 10000, 0, 5150042),
-- 蘋果短髮
(0, 31810, -1, 10000, 0, 5150042),
-- 迎風柔順
(0, 31640, -1, 10000, 0, 5150042),
-- 隨意盤
(0, 31490, -1, 10000, 0, 5150042),
-- 層次短剪
(0, 31340, -1, 10000, 0, 5150042),
-- 瑞迪亞
(0, 31610, -1, 10000, 0, 5150042),
-- 中國女孩
(0, 31470, -1, 10000, 0, 5150042),
-- 濃密直髮
(0, 31330, -1, 10000, 0, 5150042),
-- 堅強少女
(0, 31880, -1, 10000, 0, 5150042),
-- 俏麗捲辮
(0, 31230, -1, 10000, 0, 5150042),
-- 瀏海半遮
(0, 31220, -1, 10000, 0, 5150042),
-- 挑染長髮
(0, 31150, -1, 10000, 0, 5150042),
-- 傳統蒼龍
(0, 31140, -1, 10000, 0, 5150042),
-- 波浪馬尾
(0, 31110, -1, 10000, 0, 5150042),
-- 大波浪捲
(0, 31020, -1, 10000, 0, 5150042);
INSERT INTO raffle_pool(period, itemId, quantity, chance, smega, type) VALUES
-- 男臉型
-- 玩世俠盜
(0, 20059, -1, 10000, 0, 5152050),
-- 茂宜
(0, 25069, -1, 10000, 0, 5152050),
-- 很叛逆
(0, 20045, -1, 10000, 0, 5152050),
-- 微笑的臉型
(0, 20098, -1, 10000, 0, 5152050),
-- 很不屑
(0, 20009, -1, 10000, 0, 5152050),
-- 頗柔和
(0, 20031, -1, 10000, 0, 5152050),
-- 夠性格
(0, 20029, -1, 10000, 0, 5152050),
-- 翻白眼
(0, 20028, -1, 10000, 0, 5152050),
-- 好親切
(0, 20027, -1, 10000, 0, 5152050),
-- 細長眼
(0, 20022, -1, 10000, 0, 5152050),
-- 狠角色
(0, 20013, -1, 10000, 0, 5152050),
-- 懷疑的臉型
(0, 20020, -1, 10000, 0, 5152050),
-- 大眼珠
(0, 20014, -1, 10000, 0, 5152050),
-- 漫畫眼
(0, 20012, -1, 10000, 0, 5152050),
-- 小動物
(0, 20008, -1, 10000, 0, 5152050),
-- 下垂眼
(0, 20007, -1, 10000, 0, 5152050),
-- 好性感
(0, 20006, -1, 10000, 0, 5152050),
-- 瞪大眼
(0, 20004, -1, 10000, 0, 5152050),
-- 很謹慎
(0, 20002, -1, 10000, 0, 5152050),
-- 有自信
(0, 20001, -1, 10000, 0, 5152050),
-- 挑戰的臉型
(0, 20000, -1, 10000, 0, 5152050),
-- 女臉型
-- 茂宜
(0, 26073, -1, 10000, 0, 5152050),
-- 大眼睛
(0, 21011, -1, 10000, 0, 5152050),
-- 黑道的臉型
(0, 24015, -1, 10000, 0, 5152050),
-- 閃亮亮
(0, 21093, -1, 10000, 0, 5152050),
-- 生氣的臉型
(0, 21015, -1, 10000, 0, 5152050),
-- 無神的臉型
(0, 21013, -1, 10000, 0, 5152050),
-- 平靜的臉型
(0, 21014, -1, 10000, 0, 5152050),
-- 堅毅的臉型
(0, 21029, -1, 10000, 0, 5152050),
-- 夠性格
(0, 21026, -1, 10000, 0, 5152050),
-- 好親切
(0, 21024, -1, 10000, 0, 5152050),
-- 很鎮定
(0, 21023, -1, 10000, 0, 5152050),
-- 鬥雞眼
(0, 21021, -1, 10000, 0, 5152050),
-- 懷疑的臉型
(0, 21020, -1, 10000, 0, 5152050),
-- 漫畫眼
(0, 21012, -1, 10000, 0, 5152050),
-- 小動物
(0, 21008, -1, 10000, 0, 5152050),
-- 迷人的臉型
(0, 21005, -1, 10000, 0, 5152050),
-- 瞪著你
(0, 21004, -1, 10000, 0, 5152050),
-- 無所謂
(0, 21003, -1, 10000, 0, 5152050),
-- 很謹慎
(0, 21002, -1, 10000, 0, 5152050),
-- 有自信
(0, 21001, -1, 10000, 0, 5152050),
-- 挑戰的臉型
(0, 21000, -1, 10000, 0, 5152050);
INSERT INTO raffle_pool(period, itemId, quantity, chance, smega, type) VALUES
-- 男臉型
-- 玩世俠盜
(0, 20059, -1, 10000, 0, 5152049),
-- 茂宜
(0, 25069, -1, 10000, 0, 5152049),
-- 很叛逆
(0, 20045, -1, 10000, 0, 5152049),
-- 微笑的臉型
(0, 20098, -1, 10000, 0, 5152049),
-- 很不屑
(0, 20009, -1, 10000, 0, 5152049),
-- 頗柔和
(0, 20031, -1, 10000, 0, 5152049),
-- 夠性格
(0, 20029, -1, 10000, 0, 5152049),
-- 翻白眼
(0, 20028, -1, 10000, 0, 5152049),
-- 好親切
(0, 20027, -1, 10000, 0, 5152049),
-- 細長眼
(0, 20022, -1, 10000, 0, 5152049),
-- 狠角色
(0, 20013, -1, 10000, 0, 5152049),
-- 懷疑的臉型
(0, 20020, -1, 10000, 0, 5152049),
-- 大眼珠
(0, 20014, -1, 10000, 0, 5152049),
-- 漫畫眼
(0, 20012, -1, 10000, 0, 5152049),
-- 小動物
(0, 20008, -1, 10000, 0, 5152049),
-- 下垂眼
(0, 20007, -1, 10000, 0, 5152049),
-- 好性感
(0, 20006, -1, 10000, 0, 5152049),
-- 瞪大眼
(0, 20004, -1, 10000, 0, 5152049),
-- 很謹慎
(0, 20002, -1, 10000, 0, 5152049),
-- 有自信
(0, 20001, -1, 10000, 0, 5152049),
-- 挑戰的臉型
(0, 20000, -1, 10000, 0, 5152049),
-- 女臉型
-- 茂宜
(0, 26073, -1, 10000, 0, 5152049),
-- 大眼睛
(0, 21011, -1, 10000, 0, 5152049),
-- 黑道的臉型
(0, 24015, -1, 10000, 0, 5152049),
-- 閃亮亮
(0, 21093, -1, 10000, 0, 5152049),
-- 生氣的臉型
(0, 21015, -1, 10000, 0, 5152049),
-- 無神的臉型
(0, 21013, -1, 10000, 0, 5152049),
-- 平靜的臉型
(0, 21014, -1, 10000, 0, 5152049),
-- 堅毅的臉型
(0, 21029, -1, 10000, 0, 5152049),
-- 夠性格
(0, 21026, -1, 10000, 0, 5152049),
-- 好親切
(0, 21024, -1, 10000, 0, 5152049),
-- 很鎮定
(0, 21023, -1, 10000, 0, 5152049),
-- 鬥雞眼
(0, 21021, -1, 10000, 0, 5152049),
-- 懷疑的臉型
(0, 21020, -1, 10000, 0, 5152049),
-- 漫畫眼
(0, 21012, -1, 10000, 0, 5152049),
-- 小動物
(0, 21008, -1, 10000, 0, 5152049),
-- 迷人的臉型
(0, 21005, -1, 10000, 0, 5152049),
-- 瞪著你
(0, 21004, -1, 10000, 0, 5152049),
-- 無所謂
(0, 21003, -1, 10000, 0, 5152049),
-- 很謹慎
(0, 21002, -1, 10000, 0, 5152049),
-- 有自信
(0, 21001, -1, 10000, 0, 5152049),
-- 挑戰的臉型
(0, 21000, -1, 10000, 0, 5152049);





-- ----------------------------
-- Table structure for `raffle_period`
-- ----------------------------
DROP TABLE IF EXISTS `raffle_period`;
CREATE TABLE `raffle_period` (
  `type` int(11) NOT NULL,
  `period` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  `start_date` int(11) NOT NULL,
  PRIMARY KEY (`type`)
);

-- ----------------------------
-- Table structure for `raffle_log`
-- ----------------------------
DROP TABLE IF EXISTS `raffle_log`;
CREATE TABLE `raffle_log` (
  `type` int(11) NOT NULL,
  `period` int(11) NOT NULL,
  `itemId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`type`, `period`, `itemId`)
);

-- ----------------------------
-- Table structure for `rewards`
-- ----------------------------
DROP TABLE IF EXISTS `rewards`;
CREATE TABLE `rewards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accid` int(11) DEFAULT NULL,
  `cid` int(11) DEFAULT NULL,
  `start` bigint(20) NOT NULL DEFAULT -1,
  `end` bigint(20) NOT NULL DEFAULT -1,
  `type` int(11) NOT NULL DEFAULT 0,
  `amount` bigint(20) NOT NULL ,
  `itemId` int(11) NOT NULL DEFAULT 0,
  `desc` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `accid`(`accid`) USING BTREE,
  INDEX `cid`(`cid`) USING BTREE,
  CONSTRAINT `rewards_ibfk_1` FOREIGN KEY (`accid`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `rewards_ibfk_2` FOREIGN KEY (`cid`) REFERENCES `characters` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ;

-- ----------------------------
-- Table structure for `salon`
-- ----------------------------
DROP TABLE IF EXISTS `salon`;
CREATE TABLE `salon` (
  `characterid` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `position` tinyint(2) NOT NULL,
  `itemId` int(11) NOT NULL,
  `basecolor` tinyint(4) NOT NULL DEFAULT -1,
  `mixedcolor` tinyint(4) NOT NULL DEFAULT 0,
  `probcolor` tinyint(4) NOT NULL DEFAULT 0,
  INDEX `characterid`(`characterid`) USING BTREE,
  CONSTRAINT `salon_ibfk_1` FOREIGN KEY (`characterid`) REFERENCES `characters` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ;

-- ----------------------------
-- Table structure for `breaktimefield`
-- ----------------------------
DROP TABLE IF EXISTS `breaktimefield`;
CREATE TABLE `breaktimefield` (
  `world` tinyint(1) NOT NULL,
  `channel` tinyint(2) NOT NULL,
  `map` int(11) NOT NULL,
  `breakTimeFieldStep` tinyint(2) NOT NULL,
  PRIMARY KEY (`world`, `channel`, `map`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for `mileage_record`
-- ----------------------------
DROP TABLE IF EXISTS `mileage_record`;
CREATE TABLE `mileage_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accId` int(11) NOT NULL DEFAULT 0,
  `mileage` int(11) NOT NULL DEFAULT 0,
  `Time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for `mileage_record`
-- ----------------------------
DROP TABLE IF EXISTS `mileage_record`;
CREATE TABLE `mileage_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accId` int(11) NOT NULL DEFAULT 0,
  `mileage` int(11) NOT NULL DEFAULT 0,
  `Time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for `mileage_recharge_record`
-- ----------------------------
DROP TABLE IF EXISTS `mileage_recharge_record`;
CREATE TABLE `mileage_recharge_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accId` int(11) NOT NULL DEFAULT 0,
  `mileage` int(11) NOT NULL DEFAULT 0,
  `type` tinyint(3) NOT NULL DEFAULT 0,
  `status` tinyint(3) NOT NULL DEFAULT 1,
  `Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `log` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for ecpay
-- ----------------------------
DROP TABLE IF EXISTS `ecpay`;
CREATE TABLE `ecpay`  (
  `HashKey` varchar(225) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `HashIV` varchar(225) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `MerchantID` int(11) NULL DEFAULT NULL,
  `id` int(11) NULL DEFAULT NULL
) ENGINE = MyISAM CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ecpay_donatepoints
-- ----------------------------
DROP TABLE IF EXISTS `ecpay_donatepoints`;
CREATE TABLE `ecpay_donatepoints` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `AccountName` varchar(20) NOT NULL,
  `Points` int(11) NOT NULL,
  `LastAttempt` varchar(20) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact

-- ----------------------------
-- Table structure for ecpay_payment
-- ----------------------------
DROP TABLE IF EXISTS `ecpay_payment`;
CREATE TABLE `ecpay_payment` (
  `order_number` varchar(20) NOT NULL,
  `merchant_name` varchar(20) NOT NULL,
  `item_name` varchar(400) NOT NULL,
  `item_price` varchar(20) NOT NULL,
  `SubPayment` varchar(20) NOT NULL,
  `payment_expiredate` varchar(20) NOT NULL,
  `payment_No` varchar(400) NOT NULL,
  `payment_Url` varchar(400) NOT NULL,
  `payment_Method` varchar(400) NOT NULL,
  `payment_status` varchar(20) NOT NULL,
  `accountName` varchar(20) NOT NULL,
  PRIMARY KEY (`order_number`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact

-- ----------------------------
-- View structure for `readable_cheatlog`
-- ----------------------------
DROP VIEW IF EXISTS `readable_cheatlog`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `readable_cheatlog` AS select `a`.`name` AS `accountname`,`a`.`id` AS `accountid`,`c`.`name` AS `name`,`c`.`id` AS `characterid`,`cl`.`offense` AS `offense`,`cl`.`count` AS `count`,`cl`.`lastoffensetime` AS `lastoffensetime`,`cl`.`param` AS `param` from ((`cheatlog` `cl` join `characters` `c`) join `accounts` `a`) where ((`cl`.`id` = `c`.`id`) and (`a`.`id` = `c`.`accountid`) and (`a`.`banned` = 0)) ;

-- ----------------------------
-- View structure for `readable_last_hour_cheatlog`
-- ----------------------------
DROP VIEW IF EXISTS `readable_last_hour_cheatlog`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `readable_last_hour_cheatlog` AS select `a`.`name` AS `accountname`,`a`.`id` AS `accountid`,`c`.`name` AS `name`,`c`.`id` AS `characterid`,sum(`cl`.`count`) AS `numrepos` from ((`cheatlog` `cl` join `characters` `c`) join `accounts` `a`) where ((`cl`.`id` = `c`.`id`) and (`a`.`id` = `c`.`accountid`) and (timestampdiff(HOUR,`cl`.`lastoffensetime`,now()) < 1) and (`a`.`banned` = 0)) group by `cl`.`id` order by sum(`cl`.`count`) desc ;

-- ----------------------------
-- Procedure structure for `doWipe`
-- ----------------------------
DROP PROCEDURE IF EXISTS `doWipe`;
DELIMITER ;;
CREATE DEFINER=`Emy77182x3`@`%` PROCEDURE `doWipe`(iid INT, lower INT, upper INT, leave_amount INT)
BEGIN

  DECLARE done INT DEFAULT 0;

  DECLARE CharID INT;

  DECLARE NumWipe INT;

  DECLARE curs1 CURSOR FOR

    SELECT characterid, c FROM (

      SELECT characterid, COUNT(*) c

      FROM inventoryitems

      WHERE itemid = iid

      GROUP BY characterid

      ORDER BY c DESC

    ) t WHERE c >= lower && c <= upper;

  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;



  OPEN curs1;



  character_loop: LOOP

    IF done THEN

      LEAVE character_loop;

    END IF;



    Fetch curs1 INTO CharID, NumWipe;

    IF leave_amount < NumWipe THEN

      PREPARE STMT FROM

        "DELETE FROM `inventoryitems` WHERE characterid = ? && itemid = ? LIMIT ?";

      SET @CharID = CharID;

      SET @iid = iid;

      SET @NumWipe = NumWipe - leave_amount;

      EXECUTE STMT USING @CharID, @iid, @NumWipe;

    END IF;

  END LOOP;



  CLOSE curs1;

END
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `delete_inventoryequipment_tabledata`;
DELIMITER ;;
CREATE TRIGGER `delete_inventoryequipment_tabledata` BEFORE DELETE ON `inventoryitems` FOR EACH ROW begin     
  set  @NeedDelId=OLD.inventoryitemid;

  delete from inventoryequipment where inventoryitemid=@NeedDelId;
end
;;
DELIMITER ;
