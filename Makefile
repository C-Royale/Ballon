default: help

create:
	 node build/bin/create.js $(filter-out $@,$(MAKECMDGOALS))

help:
	@echo "   \033[35mmake create <component-name> [中文名]\033[0m\t---  创建新组件 package. 例如 'make create button 按钮'"
