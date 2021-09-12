import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Box, Flex } from '@chakra-ui/layout'
import axios from 'axios'
import React, { useState, VFC } from 'react'

import { Room } from '../models/RoomModel'

const Index: VFC = () => {
  const [room, setRoom] = useState<Required<Room>>()
  const [name, setName] = useState<string>()

  const createRoom = async () => {
    const { data: room } = await axios.post<Required<Room>>('/api/rooms')
    setRoom(room)
  }

  const joinDraw = async () => {
    await axios.post(`/api/rooms/${room?._id.toString()}/users`, { name, room })
  }

  return (
    <Flex flexDirection="column" alignItems="flex-start" p="6" css="gap: 12px">
      <Button variant="solid" onClick={createRoom}>
        Iniciar um sorteio
      </Button>

      <Flex>
        <Button
          variant="solid"
          onClick={joinDraw}
          flexShrink={0}
          disabled={!room}
        >
          Participar do sorteio
        </Button>

        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome aqui"
        />
      </Flex>
    </Flex>
  )
}

export default Index
