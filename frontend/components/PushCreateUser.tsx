"use client";
import { useEffect, useState, useRef } from "react";
import { PushAPI } from "@pushprotocol/restapi";
import Loader from "./shared/Loader";
import emailjs from "@emailjs/browser";
import {
  CodeFormatter,
  Section,
  SectionButton,
  SectionItem,
} from "./shared/StyledComponent";
import { useAccount } from "wagmi";
import { getWeb3Signer } from "@/helper/midas";
import { GroupImg } from "@/constants/shared";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, updateDoc } from "firebase/firestore";
import Link from "next/link";
import { db } from "@/firebase/firebase";
import Image from "next/image";
import { Push, RedEnv } from "@/public";

type ProgressHookType = {
  progressId: string;
  progressTitle: string;
  progressInfo: string;
  level: "INFO" | "SUCCESS" | "WARN" | "ERROR";
};

const CreateUserTest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [connectedUser, setConnectedUser] = useState<any>({});
  const [progress, setProgress] = useState<ProgressHookType | null>(null);
  const [groupId, setGroupId] = useState("");
  const [groupName, setGroupName] = useState<string>("");

  const [loading, setLoading] = useState<boolean>();

  const { address } = useAccount();

  useEffect(() => emailjs.init("XpCFKgVnIZLZiIDbb"), []);
  const handleSubmit = async (chatId: string) => {
    const serviceId = "service_n4lpoc1";
    const templateId = "template_sv1gf9e";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        from_name: "Midas Community",
        name: "Anshul",
        chatId: chatId,
        recepient: "anshulspartan141@gmail.com",
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const updateGroupIdInFirestore = async (
    chatId: string,
    userAddress: string
  ) => {
    try {
      const userDocRef = doc(db, "Dapp", userAddress);
      await updateDoc(userDocRef, {
        chatId: chatId,
      });
      toast.success("Group ID updated in Firestore successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.error("Error updating group ID in Firestore:", error);
    }
  };

  const testCreateUser = async () => {
    try {
      console.log("cre");
      setIsLoading(true);
      const Signer = await getWeb3Signer();

      if (Signer) {
        const UserInitialization = await PushAPI.initialize(Signer, {
          env: "staging",
        });
        console.log(UserInitialization);
        if (UserInitialization) {
          setConnectedUser(UserInitialization);
          toast.success("Admin created successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const CreateGroup = async () => {
    try {
      console.log("cre");
      console.log(connectedUser);
      const createTokenGatedGroup = await connectedUser?.chat.group.create(
        "Midas community - gold",
        {
          description: "Token gated web3 native chat example",
          image:
            "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
          members: [],
          admins: [],
          private: true,
          rules: {
            entry: {
              conditions: {
                any: [
                  {
                    any: [
                      {
                        type: "PUSH",
                        category: "ERC721", // define it's ERC20 token that you want to check, supports ERC721 as well
                        subcategory: "holder", // define if you are checking 'holder' or 'owner'
                        data: {
                          contract:
                            "eip155:80001:0x78e9f100503736534effe9006298dc5d89dc5b56",
                          comparison: ">=", // what comparison needs to pass
                          amount: "1",
                        },
                      },
                    ],
                  },
                ],
              },
            },
          },
        }
      );

      console.log(createTokenGatedGroup);

      if (createTokenGatedGroup) {
        setGroupId(createTokenGatedGroup?.chatId);

        updateGroupIdInFirestore(
          createTokenGatedGroup?.chatId,
          address as string
        );
        toast.success("Group create succesfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        toast.info("ChatId has been emailed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigator.clipboard.writeText(createTokenGatedGroup?.chatId);
        await handleSubmit(createTokenGatedGroup?.chatId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const CheckGroupPermission = async () => {
    try {
      // userAlice.chat.group.permissions(chatid)
      const groupPermissions =
        await connectedUser.chat.group.permissions(groupId);

      console.log(groupPermissions);
    } catch (error) {
      console.log(error);
    }
  };

  const joingroup = async () => {
    try {
      const joinGroup = await connectedUser.chat.group.join(groupId);
      console.log(joinGroup);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(connectedUser);

  return (
    <div className=" w-full flex rounded-2xl gap-x-16 justify-evenly items-center">
      <div className=" w-1/3 flex rounded-2xl bg-secondary-DarkForest justify-center items-center text-green-200 h-96 flex-col  gap-y-6">
        <span>
          <Image src={RedEnv} width={180} height={140} alt={""} />
        </span>
        <h1 className="text-3xl font-semibold">
          Create Gleam for your community
        </h1>
        <Link href={"http://127.0.0.1:5502/index.html"} target="_blank">
          <button className=" w-64  h-10   text-lg px-4 py-1 rounded-2xl bg-primary-LightAzalea text-secondary-DarkDandelion font-medium">
            Create Campaign
          </button>
        </Link>
      </div>
      <div className=" w-1/3 flex rounded-2xl  bg-secondary-DarkForest justify-center items-center text-green-200 h-96 flex-col gap-y-6 px-4">
        <span>
          <Image src={Push} width={180} height={180} alt={""} />
        </span>
        <h1 className="text-3xl font-semibold">
          Create Channels for your Community
        </h1>
        {connectedUser?.account ? (
          <input
            className="py-5 px-3 h-6  w-4/6  rounded-2xl text-secondary-DarkDandelion"
            placeholder=" Enter Group Name"
            onChange={(e) => setGroupName(e.target.value)}
          />
        ) : (
          ""
        )}
        <button
          onClick={() => {
            !connectedUser?.account ? testCreateUser() : CreateGroup();
          }}
          className=" w-44  h-10   text-lg px-4 py-1 rounded-2xl bg-primary-LightAzalea text-secondary-DarkDandelion font-medium"
        >
          {isLoading ? (
            <Loader />
          ) : !connectedUser?.account ? (
            "Login As Admin"
          ) : (
            "Create Group"
          )}
        </button>
      </div>
    </div>
  );
};

export default CreateUserTest;
