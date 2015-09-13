from __future__ import with_statement
from fabric.api import local, settings, abort, run, lcd
from fabric.contrib.console import confirm

def deploy():

    local("./build.sh")
    
    code_dir = '~/MyGit/orporick.bitbucket.org'
    with lcd(code_dir):
        local("git add . && git commit")
        local("git push")

