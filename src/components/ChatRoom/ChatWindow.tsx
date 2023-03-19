import { useState, useRef, useEffect } from 'react';
import {
  Box,
  VStack,
  Text,
  Flex,
  Center,
  Heading,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import ChatMessage from '@/components/ChatRoom/ChatMessage';

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const chatBottomRef = useRef();

  const toast = useToast();

  const scrollToBottom = () => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = () => {
    if (inputValue.trim() === '') {
      toast({
        title: 'Please input something...',
        status: 'warning',
        isClosable: true,
      });
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      content: inputValue,
      sender: 'me',
      timestamp: new Date().getTime(),
    };

    const responseMessage = {
      id: messages.length + 2,
      content: 'Auto reply',
      sender: 'ChatGPT',
      timestamp: new Date().getTime(),
    };

    setMessages([...messages, newMessage, responseMessage]);
    setInputValue('');
  };

  return (
    <Box w="full" h="full" px={64} py={24}>
      <VStack spacing={2} align="stretch" h="full">
        <Text
          w="fit-content"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="extrabold"
        >
          Next ChatGPT
        </Text>
        <Box
          border="1px solid"
          borderColor="gray.200"
          borderRadius={8}
          overflowY="auto"
          flex="1"
          p={2}
        >
          <VStack spacing={2} align="stretch" maxH="80vh">
            {messages.map((message) => (
              <ChatMessage
                message={message}
                isMe={message.sender == 'me'}
              ></ChatMessage>
            ))}
          </VStack>

          <div ref={chatBottomRef} />
        </Box>

        {/* User input area */}
        <Box>
          <InputGroup size="lg">
            <Input
              size="lg"
              pr="6rem"
              type="text"
              placeholder="Type something here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <InputRightElement width="6rem">
              <Button colorScheme="teal" size="sm" onClick={handleSubmit}>
                Send
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </VStack>
    </Box>
  );
}

export default ChatWindow;
