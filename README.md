jeo packjam repo!!!

### Contributing to an existing repository that uses this template
1. Create a prism launcher instance for minecraft 1.20.1, on forge 47.4.0
2. Open the newly create instance folder with a terminal `instances/(instancename)` and run `git clone https://github.com/Deepacat/jeopackjam1.git`
3. Rename the cloned git repo folder to `minecraft` so it follows `instances/(instancename)/minecraft/`
4. Open `(instancename)\minecraft\` in terminal and run `pakku fetch` to download existing mods in repo from pakku manifest, if pakku is not locally installed use `java -jar pakku.jar fetch`
5. Copy the contents inside of `(instancename)\minecraft\.pakku\"prism-overrides"` and `"overrides"`into your `(instancename)` folder
6. You now have a functioning repo/game instance to run, modify and commit from 

for more IMPORTANT info on panpack template, read PanPackReadMe.md