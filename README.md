## Ember To Do Intro App

This is the web application for todo, the intro app for Ember.

## Configuring Your Local Environment

In order to contribute to development of the todo web app, you'll need to
set-up your local environment.

### Vagrant and Virtualbox

todo uses Virtual Machines to maintain environments for developers.
In order to make this easy, Vagrant is used on top of Virtualbox.

So, install both Virtualbox and Vagrant by following their automated
installers.

- [Vagrant Download](http://www.vagrantup.com/downloads.html)
- [Virtualbox Download](https://www.virtualbox.org/wiki/Downloads)

### Launching the Virtual Machine

Once you clone this repository, change to it, i.e `cd code/todo/web/` and
run:

    vagrant up

Your virtual machine will now be automatically downloaded, installed and
configured to run the todo web application. It is possible you may run into
the following error.

    Progress state: NS_ERROR_FAILURE

This issue can be fixed with the following command. Be sure to input your
correct virtualbox location.

    sudo /Library/StartupItems/VirtualBox/VirtualBox restart

### Interacting with the Virtual Machine

In order to run the web server and interact with the database of the
application, you'll need to SSH into the Virtual Machine.

From your project directory, this is simply:

    vagrant ssh

You'll then be in the virtual machine shared folder. Any changes you make
on your host computer will be instantly reflected into the Virtual Machine's
file system.

### Preparing the Web Application

Initially, and periodically afterwards, you may need to update
the gems for the application. From inside the VM, just run:

    bundle install

Gems will be updated and installed as necessary.

The first time you provision your VM, you'll need to create a database.

    rake db:create

When initially creating your database, you may run into a `Character Encoding` error.
The following commands will fix character encoding issues.

    sudo su postgres
    pg_dropcluster --stop 9.1 main ; pg_createcluster --start --locale en_US.UTF-8 9.1 main
    exit
    sudo -u postgres createuser -s todo_development
    sudo -u postgres psql -c "ALTER USER todo_development WITH PASSWORD 'todo_development'"
    rake db:create
    rake db:migrate

Initially, and periodically, you'll need to migrate the database schema.

    rake db:migrate

Initially, you will want to fill your database with some test data.

    rake db:seed

### Running the Web Application

Run the server:

    rails s

If your database is throwing errors when starting your server, you may just need to restart the DB

    sudo /etc/init.d/postgresql stop
    sudo /etc/init.d/postgresql start

The local server can be accessed at:

    54.54.54.11:3000

## Troubleshooting

VM's and there providers (Virtualbox) can sometimes misbehave.

Your first solution should usually be to restart the VM.

    vagrant reload

If that fails, try forcing it to shutdown, then launching it again.

    vagrant halt -f
    ...
    vagrant up

It's best not to waste time debugging issues within the VM beyond
restarting it. Because the environment is fully reproducible, you
can simply destroy the VM and re-provision a new one.

    vagrant destroy [-f]
    ...
    vagrant up

*Sometimes, you need to force the VM to be destroyed with the `-f` flag.*

Once the VM finishes provisioning, you'll have a brand new environment
to work from.
