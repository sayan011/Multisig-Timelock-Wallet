import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import {SignerWithAddress} from '@nomiclabs/hardhat-ethers/signers';
import { Contract } from "ethers";

describe("MultiSigWallet Contract", function () {

  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];

  const NUM_CONFIRMATIONS_REQUIRED = 2
  const TIME=1

  let wallet: Contract
  beforeEach(async () => {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    
    // Deploy WorldPurpose Contract
    const Wallet = await ethers.getContractFactory('MultiSigWallet');
    const wallet = await Wallet.deploy(addrs,)
  
  });


  describe('Submit',()=>{
    it("Only owner can call it",async ()=>{
      const tx= multiSigWallet.connect(addr2).submit(addr2.address,'0.11','foo bar')
      await expect(tx).to.be.revertedWith('You are not the owner')
    })
  })
});
