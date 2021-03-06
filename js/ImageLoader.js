var ImageLoader = function() {
	//Resource是一个资源对象
	//加载场景 创建img对象吧图片往里塞 这个对象即为img标签
	this.floor = new Image; //地板
	this.floor.src = Resource.adorn.floor.src;
	this.wall = new Image; //墙纸
	this.wall.src = Resource.adorn.wall.src;
	this.scene = new Image; //场景
	this.scene.src = Resource.adorn.scene.src;
	this.door = new Image; //门
	this.door.src = Resource.adorn.door.src;
	this.stairs = new Image; //楼梯
	this.stairs.src = Resource.adorn.stairs.src;
	this.key = new Image; //钥匙
	this.key.src = Resource.prop.key.src;
	this.potion = new Image; //药
	this.potion.src = Resource.prop.potion.src;
	this.gem = new Image; //宝石
	this.gem.src = Resource.prop.gem.src;
	this.store = new Image; //商店
	this.store.src = Resource.prop.store.src;
	this.toolAlways = new Image; //永久性工具
	this.toolAlways.src = Resource.prop.tool_always.src;
	this.toolLimit = new Image; //限制工具
	this.toolLimit.src = Resource.prop.tool_limit.src;
	this.weapon = new Image; //武器
	this.weapon.src = Resource.weapon.src;
	this.actor = new Image; //玩家
	this.actor.src = Resource.figure.actor.skin_0_src;
	
	this.actort = new Image; //玩家
	this.actort.src = Resource.figure.actor.skin_1_src;
	
	this.helper = new Image; //帮手
	this.helper.src = Resource.figure.helper.src;
	this.princess = new Image; //公主
	this.princess.src = Resource.figure.princess.src;//怪兽
	this.sLaiTe = new Image; //士莱特
	this.sLaiTe.src = Resource.figure.monster.SLaiTe.src;
	this.ghost = new Image; //骷髅人
	this.ghost.src = Resource.figure.monster.Ghost.src;
	this.bat = new Image; //蝙蝠
	this.bat.src = Resource.figure.monster.Bat.src;
	this.orcish = new Image; //兽人
	this.orcish.src = Resource.figure.monster.Orcish.src;
	this.malphite = new Image; //石头人
	this.malphite.src = Resource.figure.monster.Malphite.src;
	this.specter = new Image; //幽灵
	this.specter.src = Resource.figure.monster.Specter.src;
	this.swordMan = new Image; //双手剑士
	this.swordMan.src = Resource.figure.monster.SwordMan.src;
	this.guard = new Image; //卫兵
	this.guard.src = Resource.figure.monster.Guard.src;
	this.magician = new Image; //法师/巫师
	this.magician.src = Resource.figure.monster.Magician.src;
	this.exorcist = new Image; //大法师
	this.exorcist.src = Resource.figure.monster.Exorcist.src;
	this.knight = new Image; //骑士
	this.knight.src = Resource.figure.monster.Knight.src;
	this.blackKnight = new Image; //黑暗骑士
	this.blackKnight.src = Resource.figure.monster.BlackKnight.src;
	this.warrior = new Image; //战士
	this.warrior.src = Resource.figure.monster.Warrior.src;
	this.magicGuard = new Image; //魔法警卫
	this.magicGuard.src = Resource.figure.monster.MagicGuard.src;
	this.devil = new Image; //魔王
	this.devil.src = Resource.figure.monster.Devil.src;
	this.boss = new Image; //boss
	this.boss.src = Resource.figure.monster.BOSS.src;
	this.bigBoss = new Image;
	this.bigBoss.src = Resource.figure.monster.BOSS.src_big;
	this.vampire = new Image;
	this.vampire.src = Resource.figure.monster.Bat.vampireSrc;
};