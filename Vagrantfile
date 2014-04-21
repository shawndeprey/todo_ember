# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "precise64"

  # The URL to a precise64 box, if it doesn't already exist on the system,
  # it will be downloaded.
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"
  config.ssh.forward_agent = true

  config.vm.define :todo do |web|
    # This is the IP we will use to access the VM while it's running.
    # It's currently allocated to the department of defense, so we
    # have no worries about it being a real IP
    web.vm.network :private_network, ip: "78.97.89.78"

    # Initially, this will be disabled unless needed. Uncomment this
    # line below to activate it.
    web.vm.network :public_network
    web.vm.network :forwarded_port, guest: 3000, host: 3000

    # Start the shell provisioner, which configures the machine for
    # use.
    web.vm.provision :shell, :path => "provision.sh"

    # For Virtualbox, we want to use more memory.
    config.vm.provider "virtualbox" do |v|
      v.customize ["modifyvm", :id, "--memory", 512]
    end

    config.vm.provider "vmware_fusion" do |v|
      web.vm.synced_folder ".", "/vagrant", :nfs => true
    end
  end

end